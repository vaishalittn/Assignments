import React, { Component } from 'react';
import Counter,{ ChangeAll } from './components/table.js';

class App extends Component {

  constructor(){
    super();

    this.state = {
        value:'',
    }
}

incrementAll = () =>
{
     this.setState({ value: 'increment'});
}
decrementAll = () =>
{
    this.setState({ value: 'decrement'});
}

render(){
    return(
        <div>
            <Counter value={this.state.value} />
            <Counter value={this.state.value} />
            <Counter value={this.state.value} />
            <ChangeAll incrementAll={this.incrementAll} decrementAll={this.decrementAll}/>
        </div>
    )

}

}

export default App;
