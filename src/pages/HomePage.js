import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
import { useProductsContext } from '../context/products_context'

const HomePage = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()
  console.log(featured)
 
  
  return <main>
    <Hero/>
    {featured && <FeaturedProducts/> }
    <Services/>
    <Contact/>

  </main>
}

export default HomePage
