// rfce => create component with export at the bottom

// rfc => create component with export in the same line

function List() {

  // let someVeggie = "potato"

  // let someVeggie = {
  //   name: "potato",
  //   calories: "60"
  // }

  let someVeggies = ["potato", "tomato", "lettuce", "avocado", "potato"]

  // let arrayToRender = [];
  // someVeggies.forEach((eachVeggie) => {
  //   let eachVeggieJSX = (<li>{eachVeggie}</li>)
  //   arrayToRender.push(eachVeggieJSX)
  // })

  // let arrayToRender = someVeggies.map((eachVeggie) => <li>{eachVeggie}</li> )

  // let someVeggies = [ <li>potato</li>, <li>tomato</li>, <li>lettuce</li>, <li>avocado</li> ]

  return (
    <div>
      
        <h1>Lists in react</h1>

        {/* <p>name: {someVeggie.name}</p>
        <p>cal: {someVeggie.calories}</p> */}

        {/* example how to do the list in a single line */}
        {/* {someVeggies.map((eachVeggie) => <li>{eachVeggie}</li> )} */}

        {someVeggies.map((eachVeggie, index) => {
          return (
            <li key={index}>{eachVeggie}</li> 
          )
        })}

    </div>
  )
}
export default List