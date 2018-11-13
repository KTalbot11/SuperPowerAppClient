import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import GalleryFeed from "../Feeds/galleryFeed";

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allPowers: []
        }
    }

    componentWillMount() {
        this.showPowers()
    }


    showPowers = () => {
        fetch("http://localhost:3002/api/power/", {
            method: 'GET',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.sessionToken
            })
        })
        .then((res) => res.json()
        ).then((allPowers) => {
            return this.setState({allPowers: allPowers})
        })
    }

    // deleteCauseDeadline = () => {
    //     fetch("http://localhost:3002/api/power/:id",{
    //         method: 'DELETE',
    //         headers: new Headers({
    //             'Content-Type' : 'application/json'
    //         })
    //     })
        
    // }

    render() {
        return(
            <Container>
                <h1>Gallery</h1>
                <Row>
                    <Col md="9">
                    
                        <GalleryFeed allPowers={this.state.allPowers} />
                    
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Gallery;