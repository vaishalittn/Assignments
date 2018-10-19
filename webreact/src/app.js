import React, {Component, Fragment} from 'react';
import Header from "./header/header";

class AppComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            divText:'Hello India',
            isTitleHide: false
        }
    }

    componentWillMount(){
        console.log('will mount');
    }

    componentDidMount(){
        console.log('did mount');
    }

    changeText = ()=>{
        this.setState({
            divText:'Hello USA'
        })
    }

    toggleTitle =()=> {
        this.setState({
            isTitleHide: !this.state.isTitleHide
        })
    }

    // componentWillReceiveProps(){
    //     console.log("componentWillReceiveProps");
    // }

    // shouldComponentUpdate(a, b){

    //     console.log("shouldComponentUpdate", a, b);
    //     return false;
    // }


    render(){
        console.log('render')
        const {divText, isTitleHide} = this.state;

        return(
            <Fragment>
                <Header headerText="First Header" />
                <Header headerText="Second Header"/>
                {!isTitleHide?<div>{divText}</div>: null}
                <button onClick={this.changeText}>Change Text</button>
                <button onClick={this.toggleTitle}>{!isTitleHide?'Hide Title':'show Title'}</button>
            </Fragment>

        )
    }
}

export const App = AppComponent;
