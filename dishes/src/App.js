import React, { Component } from 'react';
import Dish from './components/table.js';
import './App.css';
class App extends Component {
    
    state={
    existingDishes:{
    A:{name:'spaghetti',Energy:'Energy '+20,price:'Price '+20},
    B:{name:'pasta',Energy:'Energy '+ 40,price:'Price '+ 35},
    C:{name:'Pizza',Energy:'Energy '+100,price:'Price '+250}
    },
    newdishCounter:0
    
    };
    createDish=()=>{
    this.state.newdishCounter+=1;
    let newDishObjectName='newDish'+this.state.newdishCounter;
    this.state.existingDishes[newDishObjectName]={name:'Noodles',Energy:'Energy '+45,price:'Price '+50};
    this.setState({})
    };
    
    render() {
    
    
    return (
    
    <div className='container'>
    <h1>Menu</h1>
    <div className="App">
    
    {this.state.existingDishes && Object.keys(this.state.existingDishes).map(function(detail, id) {
    return <Dish key={id} DishObject={this.state.existingDishes[detail]}/>;
    }.bind(this))}
    </div>
    <button onClick={()=>{this.createDish('newDish')}}>Add Dish</button>
    
    </div>
    );
    
    }
    }
    
export default App;
