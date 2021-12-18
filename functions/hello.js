
const items=[
    {id:1,name:"john"},
{id:2,name:"srinath"}
]
exports.handler = async function (event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify(items),
    }
  }