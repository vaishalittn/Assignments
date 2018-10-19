import React, {Component } from "react";

class Header extends Component {

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps){
        console.log("nextProps", nextProps);
        return true;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    render(){
        console.log("header render");
        const {headerText} = this.props;

        return(
            <header>
                <h1>{headerText}</h1>
            </header>
        )
    }
}

export default Header;
