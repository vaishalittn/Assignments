import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown,MenuItem,Grid,Row,Col,Image,FormGroup,Button,FormControl } from 'react-bootstrap';
// import './mystyle.scss';
// import styled from 'styled-components'


class Navigation extends Component {
    render() {
        return (
            <div className="navigate">

                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Image src=" https://logos-download.com/wp-content/uploads/2016/05/Jabong_logo_logotype.png" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown eventKey={1} title="WOMEN" id="basic-nav-dropdown">*/}
                                <MenuItem eventKey={1.1}>ETHNIC WEAR</MenuItem>
                                <MenuItem eventKey={1.2}>FOOTWEAR</MenuItem>
                                <MenuItem eventKey={1.3}>BAGS</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={1.3}>BEAUTY & GROOMING</MenuItem>
                                </NavDropdown>
                                <NavDropdown eventKey={2} title="MEN" id="basic-nav-dropdown">
                                <MenuItem eventKey={2.1}>CLOTHING</MenuItem>
                                <MenuItem eventKey={2.2}>WATCHES</MenuItem>
                                <MenuItem eventKey={2.3}>BAGS</MenuItem>
                                <MenuItem eventKey={2.4}>SUNGLASSES</MenuItem>
                                <MenuItem eventKey={2.5}>ACCESSORIES</MenuItem>
                                </NavDropdown>
                                <NavDropdown eventKey={3} title="KIDS" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>GIRLS CLOTHING</MenuItem>
                                <MenuItem eventKey={3.2}>BOYS FOOTWARE</MenuItem>
                                <MenuItem eventKey={3.3}>GIRLS FOOTWARE</MenuItem>
                                <MenuItem eventKey={3.4}>TOYS</MenuItem>
                                <MenuItem eventKey={3.5}>ACCESSORIES</MenuItem>
                                </NavDropdown>
                                <NavDropdown eventKey={4} title="ACCESSORIES" id="basic-nav-dropdown">
                                <MenuItem eventKey={4.1}>WOMEN SUNGLASSES</MenuItem>
                                <MenuItem eventKey={4.1}>MEN SUNGLASSES</MenuItem>
                                <MenuItem eventKey={4.1}>WOMEN BEAUTY</MenuItem>
                                <MenuItem eventKey={4.1}>WOMEN BELTS</MenuItem>
                                <MenuItem eventKey={4.5}>MEN GROOMING</MenuItem>
                                </NavDropdown>
                                <NavDropdown eventKey={5} title="SPORTS" id="basic-nav-dropdown">
                                <MenuItem eventKey={5.1}>WOMEN FOOTWARE</MenuItem>
                                <MenuItem eventKey={5.1}>MEN CLOTHING</MenuItem>
                                <MenuItem eventKey={5.1}>KIDS</MenuItem>
                                <MenuItem eventKey={5.1}>ACCESSORIES</MenuItem>
                                <MenuItem eventKey={5.5}>NEW IN</MenuItem>
                                </NavDropdown>
                                <NavItem eventKey={6} href="#">HOME & LIVING</NavItem>
                                <NavItem eventKey={7} href="#">TRIAL</NavItem>
                                <NavItem eventKey={8} href="#">JUICE</NavItem>
                            <Navbar.Form pullRight>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Search" />
                                </FormGroup>{' '}
                                <Button type="submit">O</Button>
                            </Navbar.Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;