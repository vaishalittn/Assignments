import React, { Component } from 'react';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: '',
            itemList: [],
        };
    }

onInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
}

addItem = e => {
    const { detail, itemList } = this.state;
    const arr = `${detail}`.replace(/'/ig, "").split("-");
    const itemName = arr[0];
    const itemPrice = arr[1];
   // const total = null;
    itemList.push({
        name: itemName,
        price: itemPrice,
        quantity: 5,
      //  total:total,
    
    });

    this.setState({
        itemList,
        detail: ''
    });
}

deleteItem = index => {
    const { itemList } = this.state;
    itemList.splice(index, 1);
    this.setState({ itemList });
};

increasequantity = index => {
    const{ itemList } = this.state;
    itemList[index].quantity++;
    this.setState({itemList});
}

decreasequantity = index => {
    const{ itemList } = this.state;
    itemList[index].quantity--;
    this.setState({itemList});
}

render() {
        const { detail, itemList } = this.state;
           let totalPrice = 0;
            const itemMarkUp = itemList.map((item, index) => {
            if(item.quantity && item.price){
            totalPrice += (item.quantity * item.price);
            }
            return (
                <li key={`item-${index}`}>
                 &nbsp; {item.name} :: {item.quantity} :: {item.price} :: {item.price*item.quantity}                  
                   &nbsp; <input type="button" value="+"
                    onClick={() => this.increasequantity(index)} />&nbsp;&nbsp; 
                     <input type="button" value="-"
                    onClick={() => this.decreasequantity(index)} />&nbsp;&nbsp; 
                    <input type="button" value="delete item"
                    onClick={(e) => this.deleteItem(index)} />&nbsp;&nbsp;       
            </li>	
            );
            });

        return (

            <div>
            <h1>My Cart</h1>
                    <form>
                        <div>&nbsp; &nbsp;
                            <input name="detail" className="text" value={detail} type="text" onChange={(e) => this.onInputChange(e)} />
                            <input type="button" className="button" value="Add Item" onClick={(e) => this.addItem(e)} disabled={!detail} />
                        </div>
                        <ul>
                        &nbsp; &nbsp;{itemMarkUp}
                        </ul>
                    </form>
                    &nbsp; &nbsp;Total:{totalPrice}
            </div>

        );
    }
}