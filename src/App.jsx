import Characters from "./components/Characters"
import Container from "./components/Container"
import FoodMenu from "./components/FoodMenu"
import List from "./components/List"

import ReactPlayer from 'react-player'
import Draggable from 'react-draggable';

import { useRef } from "react"


function App() {

  const nodeRef = useRef(null);

  return (
    <>

      {/* <List /> */}

      {/* <Characters /> */}

      {/* <FoodMenu /> */}

      <Container color="blue" bg="lightblue">
        <div>
          <h1>Hello!</h1>
          <span>ajsdhakjs</span>
          <p>kh327468273</p>
        </div>
      </Container>

      

      {/* <Container color="red" bg="salmon">
        <Characters />  
      </Container> */}

      <ReactPlayer src='https://youtu.be/dQw4w9WgXcQ' controls={true} volume={0.1}/>

      <Draggable nodeRef={nodeRef}>
        {/* <div ref={nodeRef}>Example Target</div> */}
        <div ref={nodeRef}>
          <Container color="green" bg="lightgreen">
            <h2>Good Bye!</h2>
          </Container>
        </div>
      </Draggable>


    </>
  )
}

export default App
