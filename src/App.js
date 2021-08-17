import React, { useState } from 'react'
import "./App.css"
 import New from './component/New'
import Csv from './component/Csv'
const App = () => {
  const [color, setcolor] = useState("#FF6B6B")
  const [hide, display] = useState("hidden")




  const chngcolor = () => {


    if (color === "#FF6B6B") {
      setcolor("green")
      display("")
    }
    else {
      setcolor("green")
    }

  }

  const block1 = {
    height: "50%",
    width: "50%",
    background: color,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  }

  return (
    <div>
      <div style={block1}>
      </div>
      <br />

      <div style={{ position: "absolute", top: "90%", left: "50%", transform: "translate(-50%,-50%)" }}>
        <button style={{ height: "3rem", width: "100%", background: "red", color: "white", border: "none" }} onClick={chngcolor} >Press</button>
        <p style={{ visibility: hide, marginBottom: "0px" }}>Button Clicked</p>
       <Csv/>
       <New/>
      </div>


    </div>
  )
}

export default App
