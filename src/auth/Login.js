import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../helpers/enviorment';

class Login extends Component {
    constructor(props){
        super(props)
        this.state ={
            username: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/api/login`, {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <h6>Lorem ipsum dolor sit amet consecter oh this is a lorem ipsum my b</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="li_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Login;