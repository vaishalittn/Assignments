import React, { Component } from 'react';
import {Carousel, Col, Grid, Image, Row} from 'react-bootstrap';
import './mystyle.css';
import Midsection from "./midsection";
import Footer from "./footer";



export class Carcontent extends Component {
    render() {
        return (
            <div className="content">
                    <Grid>
                        <Row>
                            <Col xs={12} md={8}>
                                <div id="carouse">
                                <Carousel>
                                    <Carousel.Item>
                                        <img src="https://static.jabong.com/cms/new-site/Desktop_1540389802671.jpg" />
                                        <Carousel.Caption>
                                            <h3></h3>
                                            <p></p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img alt="900x500" src="https://static.jabong.com/cms/new-site/Desktop_1540389802671.jpg" />
                                        <Carousel.Caption>
                                            <h3></h3>
                                            <p></p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img alt="900x500" src="https://static.jabong.com/cms/new-site/Desktop_1540389802671.jpg" />
                                        <Carousel.Caption>
                                            <h3></h3>
                                            <p></p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div id="sidebar">
                                <ul>
                                    <li><img src="https://static.jabong.com/cms/new-site//dresses_desktop_1540300400987.jpg"  /></li>
                                    <li><img src="https://static.jabong.com/cms/new-site//dresses_desktop_1540300400987.jpg" /></li>
                                    <li><img src="https://static.jabong.com/cms/new-site//dresses_desktop_1540300400987.jpg" /></li>
                                </ul>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
        );
    }
}

