function FoodHeader() {
  
  const today = new Date() // we get today's date in a specific format
  // console.log(today.toString())
  // console.log(today.toDateString())
  // console.log(today.toISOString().slice(0, 10))
  // console.log(today.toLocaleDateString())

  return (
    <header>
      <h1>Welcome to our restaurant, this is today menu</h1>
      <p>todays date is: {today.toISOString().slice(0, 10)}</p>
    </header>
  )
}
export default FoodHeader