import React, { Component, Fragment } from "react";

class App extends Component {
    constructor() {

        super();
        this.state = {

            firstname: "Vaishali",
            lastname: "Goyal",
            username:"Vaishali Goyal",
            password: "",
            emailid: ""
        }
    }

    onInputChange = (e) =>{
        console.log(this.state.username);
        this.setState({username:e.target.value});
    }

    render() {
        return(
            <div>
                Username:<input type={"text"} onChange={this.onInputChange} value={this.state.username}/>
                Password:<input type={"password"}/>
            </div>
        );
    }
}
export default App;