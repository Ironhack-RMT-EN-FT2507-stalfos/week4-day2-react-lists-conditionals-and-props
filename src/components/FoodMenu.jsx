import FoodCard from "./FoodCard"
import FoodHeader from "./FoodHeader"

const allFoods = [
  {
    type: "Starter",
    name: "Tequeños",
    price: 4
  },
  {
    type: "Main Dish",
    name: "Pabellón",
    price: 12
  },
  {
    type: "Dessert",
    name: "Tres Leches",
    price: 5
  }
]

function FoodMenu() {

  return (
    <div>
      
      <FoodHeader />

      {allFoods.map((eachFood) => {
        return (
          <FoodCard type={eachFood.type} name={eachFood.name} price={eachFood.price} />

          //* advanced syntax by spreading all properties of the object as props
          // <FoodCard {...eachFood} />
        )
      })}

      {/* <FoodCard type={"Starter"} name="Tequeños" price={4}/>
      <FoodCard type={"Main Dish"} name="Pabellón" price={12}/>
      <FoodCard type={"Dessert"} name="Tres Leches" price={5}/> */}

      {/* <div className="card">
        <h4>Starter</h4>
        <h5>Tequeños</h5>
        <span>Price: 4€</span>
      </div>

      <div className="card">
        <h4>Main Dish</h4>
        <h5>Pabellón Criollo</h5>
        <span>Price: 12€</span>
      </div>

      <div className="card">
        <h4>Dessert</h4>
        <h5>Tres Leches</h5>
        <span>Price: 5€</span>
      </div> */}


    </div>
  )
}
export default FoodMenu