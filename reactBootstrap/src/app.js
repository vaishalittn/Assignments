import React, { Component } from 'react';
import Navigation from "./components/navigation";
import {Carcontent} from "./components/carousel";
import Midsection from "./components/midsection";
import Footer from "./components/footer";
//import Newcomp from "./components/newcomp";
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div>
            <Navigation />
            <Carcontent />
            <Midsection/>
            <Footer/>

            </div>
        );
    }
}

export default App;