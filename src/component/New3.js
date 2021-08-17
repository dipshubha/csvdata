import React, { Component } from 'react';

class App extends Component {

  //   constructor(props) {
  //     super(props);
  //   }

   showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = (e.target.result)
      const obj = JSON.stringify(text);
      console.log(JSON.parse(obj).length)
      console.log(typeof (JSON.parse(obj)))
    //  const data1 = JSON.parse(obj);
      console.log(typeof (obj))
      console.log(text)
      alert(text)
    };
    reader.readAsText(e.target.files[0])
  }
  

  render = () => {
    // console.log(text)

    return (<div>
      <div>
       
        <div class="row">
          <div class="column"></div>
       <h1>shubhadip</h1>
        </div>
      </div>
      <input type="file" onChange={(e) => this.showFile(e)} style={{ marginTop: "5rem", marginLeft: "5rem" }} />
    </div>
    )
  }
}

export default App;