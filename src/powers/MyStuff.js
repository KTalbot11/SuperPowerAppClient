import React from 'react';
import Create from './Create';
import APIURL from '../helpers/enviorment';

class MyStuff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myPowers: []
        }
    }


    componentWillMount() {
        this.showPowers()
    }


    showPowers = () => {
        fetch(`${APIURL}/api/power/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.sessionToken
            })
        })
        .then((res) => res.json()
        ).then((myPowers) => {
            return this.setState({myPowers: myPowers})
        })
    }



    render() {
        return(
            <div>
                <h1>Welcome to the personal stuff.</h1>
                <Create sessionToken={this.props.sessionToken}>Create One</Create>
                

                
            </div>
        )
    }

}

export default MyStuff;