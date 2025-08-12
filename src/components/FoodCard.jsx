function FoodCard(props) {

  console.log(props)

  return (
    <div className="card">
      <h4>{props.type}</h4>
      <h5>{props.name}</h5>
      <span>Price: {props.price}€</span>
    </div>
  )
}
export default FoodCard




