import React from 'react';
import styled from 'styled-components'

const GalleryFeed = (props) => {
   
   
    const Box = styled.div`
    @media(max-width:529px){
    background-color: #575757;
    margin: auto;
    margin-top: .5em;
    padding: .5em;
    border-radius: 3%;
    width: 70%;
    color: #f0fff0;
    }
    @media(min-width:530px){
    background-color: #575757;
    margin-left: auto;
    margin-top: .5em;
    padding: .5em;
    border-radius: 3%;
    width: 70%;
    color: #f0fff0;
    }

    
    
    `;
    

    //look back to have certain resolutions change margins. phone vs laptop. 
    //edit: I AM A LUCKY DUCK FOR TAKING NOTES AT WORKSHOP

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