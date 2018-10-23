import React from 'react';
import {Link} from 'react-router-dom';

const Navigation =()=> {
    return (
        <ul className="menu">
            <li><Link to='/home'> Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact us'>Contact us</Link></li>
            <li><Link to='/users'>Users</Link></li>
        </ul>

    )
}
export default Navigation;