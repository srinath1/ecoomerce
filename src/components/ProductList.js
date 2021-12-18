import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  console.log('I am loading@product_list')
  const{filtered_products:products,grid_view}=useFilterContext()
  if(products.length<1){
   return <h5 style={{textTransform:"none"}}>
      sorry ,nothing to display for the search
    </h5>
  }
  if(grid_view===false){
    return <ListView products={products}/>
  }

  return <GridView products={products}>product list</GridView>
}

export default ProductList
