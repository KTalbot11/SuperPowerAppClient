import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Button,
} from 'reactstrap';
import {
    Link,
} from 'react-router-dom';
import './navbar.css'
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
           isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: this.state.isOpen
        });
    }

    render() {
        return (
            <div className="NavDiv">
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">Super Power Gallery</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button className="button"><Link to="/" className="link">Gallery</Link></Button>
                                <Button className="button"><Link to="/MyStuff" className="link">My Stuff</Link></Button>
                                <Button className="button" onClick={() => this.props.clickLogout()}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;