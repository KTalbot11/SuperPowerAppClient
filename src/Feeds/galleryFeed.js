import React from 'react';
import styled from 'styled-components'

const GalleryFeed = (props) => {
    console.log(props);
   
    const Box = styled.div`
    background-color: #575757;
    margin: auto;
    margin-top: .5em;
    padding: .5em;
    border-radius: 3%;
    width: 65%;
    color: #f0fff0;
    margin-right: 0em;
    `;


    return(
        <div>
            {
                props.allPowers.map((power, id) => {
                    return(
                        <div key={id}>
                            <Box>
                                <h2>Name: {power.name}</h2>
                                <h3>Tag: {power.tags}</h3>
                                <h3>description: {power.description}</h3>
                                <h4>Creator: {power.owner}</h4>
                            </Box>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GalleryFeed;