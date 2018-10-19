import React, {Component, Fragment} from 'react';

class App extends Component {
    constructor() {

        super();
        var Counter = React.createClass({
            incrementCount: function(){
                this.setState({
                    count: this.state.count + 1
                });
            },
            decrementCount: function(){
                this.setState({
                    count: this.state.count - 1
                });
            },
            getInitialState: function(){
                return {
                    count: 0
                }
            },
            render: function(){
                return (
                    <div className="counter">
                        <h1>{this.state.count}</h1>
                        <button className="btn" onClick={this.incrementCount}>Increment</button>
                        <button className="btn" onClick={this.decrementCount}>Decrement</button>
                    </div>
                );
            }
        });

        React.render(
            <Counter />,
            document.body
        );

        export default App;
