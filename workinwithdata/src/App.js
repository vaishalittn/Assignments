import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
    state = {
        userList:[],
        itemToDisplay: {},
        isEditing: false,
        };
        
        displayData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
        this.setState({
        userList: response.data
        });
        })
        .catch((error)=>{
        alert('Error while fetching users.');
        console.log('error', error)
        })
        };
        
        selectUser = (user) => {
        this.setState({
        itemToDisplay: Object.assign({}, user),
        isEditing: false
        });
        };
        
        handleEditClick = () => {
        this.setState({
        isEditing: true
        })
        };
        
        inputChangeHandler = (event, key) => {
        const { itemToDisplay } = this.state;
        itemToDisplay[key] = event.target.value;
        this.setState({itemToDisplay});
        };
        
        deleteUser = () => {
        const { itemToDisplay, userList } = this.state;
        const updatedList = userList.filter((user) => {
        return (user.id !== itemToDisplay.id);
        });
        
        this.setState({
        userList: updatedList,
        itemToDisplay: {}
        });
        };
        
        saveUserChanges = () => {
        const { itemToDisplay, userList } = this.state;
        const updatedList = userList.map((user) => {
        return (user.id !== itemToDisplay.id) ? user : Object.assign({}, itemToDisplay);
        });
        
        this.setState({
        userList: updatedList,
        isEditing: false
        });
        };
        hideUserDetails = () => {
        this.setState({
        isEditing: false,
        itemToDisplay:{}
        });
        };
        render() {
        const { itemToDisplay, userList, isEditing } = this.state;
        const userListMarkup = userList.map((user)=>{
        return (
        <li key={user.id} onClick={() => this.selectUser(user)}>{user.username}</li>
        )
        });
        
        return (
        <div className="App">
        <div>
        <button className="button-style" onClick={this.displayData}>Get Users</button>
        </div>
        
        <ul className="user-list">
        { userListMarkup }
        </ul>
        {
        itemToDisplay.id ? (
        <div className="user-details">
        <div>
        <label>Id:</label>
        <input type="text" className="bg-grey" value={itemToDisplay.id} disabled />
        </div>
        <div>
        <label>Name:</label>
        <input type="text" value={itemToDisplay.name} onChange={(event) => this.inputChangeHandler(event, 'name')} disabled={!isEditing} />
        </div>
        <div>
        <label>User-Name:</label>
        <input type="text" className="bg-grey" value={itemToDisplay.username} disabled />
        </div>
        <div>
        <label>Phone:</label>
        <input type="text" value={itemToDisplay.phone} onChange={(event) => this.inputChangeHandler(event, 'phone')} disabled={!isEditing} />
        </div>
        <div>
        <label>Email:</label>
        <input type="text" className="bg-grey" value={itemToDisplay.email} disabled />
        </div>
        <div>
        <label>Website:</label>
        <input type="text" value={itemToDisplay.website} onChange={(event) => this.inputChangeHandler(event, 'website')} disabled={!isEditing} />
        </div>
        
        {
        isEditing ? (
        <div>
        <button onClick={this.saveUserChanges}>Save Changes</button>
        </div>
        ) : (
        <div>
        <button onClick={this.handleEditClick}>Edit</button>
        <button onClick={this.deleteUser}>Delete</button>
        </div>
        )
        }
        <span className="close-icon" onClick={this.hideUserDetails}> X </span>
        </div>
        ):null
        }
        </div>
        );
        }
        }
export default App;