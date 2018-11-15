import React from 'react';
import { Container } from 'reactstrap';
import Create from './Create';
import APIURL from '../helpers/enviorment';
import MyStuffFeed from '../Feeds/myStuffFeed';
import UpdatePower from './UpdatePower';


class MyStuff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPowers: [],
            updatePressed: false,
            powerToUpdate: {}
        }
    }


    componentWillMount() {
        this.showPowers()
    }

    updatePowersArray = () => {
        this.showPowers()
    }

    toggle = () => {
        this.setState({updatePressed: !this.state.updatePressed});
    }

    showPowers = () => {
        fetch(`${APIURL}/api/power/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => res.json()
            ).then((allPowers) => {
                return this.setState({ allPowers: allPowers })
            })
            .then((allPowers) => {
                return this.state.allPowers
            })
    }

    deletePower = (event) => {
        fetch(`${APIURL}/api/power/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ powers: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => this.showPowers())
    }

    updatePower = (event, power) => {
        fetch(`${APIURL}/api/power/update/${power.id}`, {
            method: 'PUT',
            body: JSON.stringify({ power: power }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false })
                this.showPowers();
            })
    }

    setUpdatePower = (event, power) => {
        this.setState({
            powerToUpdate: power,
            updatePressed: true
        })
    }

    render() {
        return (
            <Container>
                <div>
                    <h1>Welcome to the personal stuff.</h1>
                    <Create sessionToken={this.props.sessionToken}>Create One</Create>
                    <MyStuffFeed allPowers={this.state.allPowers} userID={this.props.userID} delete={this.deletePower} update={this.setUpdatePower} sessionToken={this.props.sessionToken}></MyStuffFeed>


                </div>
                <div>
                    {this.state.updatePressed ? <UpdatePower toggle={this.toggle} update={this.updatePower} token={this.props.token} power={this.state.powerToUpdate} /> : <div></div>}
                </div>

            </Container>
        )
    }

}

export default MyStuff;