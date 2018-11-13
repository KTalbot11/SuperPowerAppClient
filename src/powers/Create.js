import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import styled from 'styled-components'
import APIURL from '../helpers/enviorment';

const Box1 = styled.div`
background-color: #575757;
margin: auto;
margin-top: .5em;
padding: .5em;
border-radius: 3%;
width: 85%;
color: #f0fff0;
`;

class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            tags: '',
            description: ''
        }
    }


    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        console.log(this.props)
        fetch(`${APIURL}/api/power/create`, {
            method: 'POST',
            body: JSON.stringify({ power: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            }),
        }).then(
            (response) => response.json()
        )
        event.preventDefault()
        
    }


    render(){
        return(
            <Box1>
            <div>
                <h1>Create a Power</h1>
                <h2>Come up with your own super power and post it for others to see.</h2>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="name">Name of Power</Label>
                        <Input id="c_name" type="text" name="name" placeholder="enter a name" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="tags">Tag</Label>
                        <Input id="c_tags" type="type" name="tags" /*remember to switch to select when ready to add options*/ placeholder="tags" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">description</Label>
                        <Input id="c_description" type="text" name="description" placeholder="Explain your power." onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
            </Box1>
        )
    }
}

export default Create;