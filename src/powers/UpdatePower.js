import React from 'react';
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class UpdatePower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tags: "",
            description: ""
            
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.power.id,
            name: this.props.power.name,
            tags: this.props.power.tags,
            description: this.props.power.description
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader toggle={this.props.toggle} charCode="X">Edit a course</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Input id="name" type="text" name="name" value={this.state.name} placeholder="Enter a power name" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="tags" id="tags" value={this.state.tags} onChange={this.handleChange} placeholder="tag" />
                                
                            </FormGroup>
                            <FormGroup>
                                <Input id="description" type="text" name="description" value={this.state.description} placeholder="enter a description" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


export default UpdatePower;
