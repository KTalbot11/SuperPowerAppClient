import React from 'react';
import Create from './Create';
import APIURL from '../helpers/enviorment';
import MyStuffFeed from '../Feeds/myStuffFeed';

class MyStuff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPowers: []
        }
    }


    componentWillMount() {
        this.showPowers()
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
    }

    // deleteCauseDeadline = () => {
    //     fetch(`${APIURL}/api/power/:id`,{
    //         method: 'DELETE',
    //         headers: new Headers({
    //             'Content-Type' : 'application/json',
    //             'Authorization' : this.props.sessionToken
    //         })
    //     })
    //    .then((res) => res.json()
    //    ).then((allPowers) => {
    //    return this.setState({allPowers: allPowers})
    //})
    // }

    render() {
        return (
            <div>
                <h1>Welcome to the personal stuff.</h1>
                <Create sessionToken={this.props.sessionToken}>Create One</Create>
                <MyStuffFeed allPowers={this.state.allPowers} userID={this.props.userID}></MyStuffFeed>


            </div>
        )
    }

}

export default MyStuff;