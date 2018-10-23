import React from 'react';

class Counter extends React.Component
{

    constructor(props){
        super(props);
        this.state = {
            counterVal: 0,
        };
        console.log("Counter props : "+this.state.counterVal);
    }

    componentWillReceiveProps(updatedProps) {
        console.log('---------', updatedProps);

        const { counterVal } = this.state;
        if(updatedProps.value === 'increment') {
            this.setState({ counterVal: counterVal + 1 });
        } else if (updatedProps.value === 'decrement') {
            this.setState({ counterVal: counterVal - 1 });
        }
    }

    increment = () => {
        const val = this.state.counterVal;
        this.setState({counterVal: val+1});
    };

    dec = () => {
        const val = this.state.counterVal;
        this.setState({counterVal: val-1});
    };

    render(){
        return(
            <div>
            <span> {this.state.counterVal} </span>
                <p>
                <input type='button'  value="Increment" onClick={this.increment} />&nbsp;&nbsp;&nbsp;
                <input type='button'  value="Decrement" onClick={this.decrement} />&nbsp;&nbsp;&nbsp;
                </p>
            </div>
        )
    }
}

export const ChangeAll = (props) =>{
    return (
        <div><p>
            <label>Increment All</label>&nbsp;&nbsp;
            <input type='button'  value="+"  onClick={props.incrementAll}/>&nbsp;&nbsp;&nbsp;

            <label>Decrement All</label>&nbsp;&nbsp;
            <input type='button'  value="-" onClick={props.decrementAll}/>&nbsp;&nbsp;&nbsp;
            </p>
        </div>
    )
}

export default Counter;
