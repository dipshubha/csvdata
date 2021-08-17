import React, { Component } from "react"
import { render } from "react-dom"
class New1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filename: '',
            filecontain: ''
        };

    }

change=e=>{
    const file=e.targer.files[0];
    const reader=new FileReader();
    reader.readAsText(file);
    reader.onload=()=>{
        this.setState({filename:file.name,filecontain:reader.result})
    }
    reader.onerror=()=>{
        console.log("file error",reader.error)
    }
}

    render() {
        return (
            <div>
                <h1>file Reder</h1>
                <input type="file" onChange={this.change} />
                <br/>
                <p>{this.state.filename}</p>
                <p>{this.state.filecontain}</p>
            </div>
        )
    }
}
export default New1