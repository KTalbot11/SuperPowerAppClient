import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import GalleryFeed from "../Feeds/galleryFeed";
import APIURL from '../helpers/enviorment';
import './mainColors.css';

class Gallery extends React.Component {
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


    render() {
        return (
            <Container>
                <div className="mainDiv">
                    <h1>Gallery</h1>
                    <Row>
                        <Col md="9">

                            <GalleryFeed allPowers={this.state.allPowers} />

                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }

}

export default Gallery;