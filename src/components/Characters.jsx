import characters from "../data/characters";

function Characters() {

  const titles = ['TEENAGE', 'MUTANT', 'NINJA', 'TURTLES'];

  return (
    <>
      <div id="header" className="container">
        {titles.map((eachTitle) => {
          return (
            <h1 key={eachTitle}>{eachTitle}</h1>
          )
        })}
      </div>

      <hr />

      <div id="character-list" className="container">
        {characters.map((eachChar) => {

          let emoji;
          if (eachChar.name === "splinter") {
            emoji = "🐀"
          } else if (eachChar.name === "pidgeon pete") {
            emoji = "🕊️"
          } else {
            emoji = "🐢"
          }

          return (
            <div className="container" style={ {background: eachChar.color} }>
              <h3>Name: {eachChar.name}</h3>
              <p>Weapon: {eachChar.weapon}</p>

              {/* { eachChar.name === "splinter" ? <span className="emoji">🐀</span> : <span className="emoji">🐢</span> } */}
              {/* <span className="emoji"> {eachChar.name === "splinter" ? "🐀" : eachChar.name === "pidgeon pete" ? "🕊️" : "🐢"} </span> */}
              <span className="emoji"> {emoji} </span>

              {/* <span className="emoji"> {eachChar.name === "donatello" ? "🌟" : null} </span> */}

              {/* {eachChar.name === "donatello" ? <span className="emoji">🌟</span> : null} */}
              {eachChar.name === "donatello" && <span className="emoji">🌟</span> }

            </div>
          )
        })}
      </div>
    </>
  )
}
export default Characters