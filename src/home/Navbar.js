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
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">Super Power Gallery</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button><Link to="/Gallery">Gallery</Link></Button>
                                <Button><Link to="/MyStuff">My Stuff</Link></Button>
                                <Button onClick={() => this.props.clickLogout()}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;