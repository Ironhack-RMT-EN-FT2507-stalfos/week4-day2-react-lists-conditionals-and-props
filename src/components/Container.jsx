function Container(props) {

  console.log(props)
  const divStyles = {
    padding: "20px",
    margin: "30px",
    border: "2px solid black",
    borderRadius: "10px",
    color: props.color,
    backgroundColor: props.bg
  }

  return (
    <div style={divStyles}>
      
        {props.children}

    </div>
  )
}
export default Container