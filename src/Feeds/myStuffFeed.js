import React from 'react';
import styled from 'styled-components'


const MyStuffFeed = (props) => {

   
    const Box = styled.div`
    background-color: #575757;
    margin: auto;
    margin-top: .5em;
    padding: .5em;
    border-radius: 3%;
    width: 65%;
    color: #f0fff0;
    `;


    return(
        <div>
            
            {
                props.allPowers.map((power, idex) => {
                    if(power.owner == props.userID){
                    return(
                        <div key={idex}>
                            <Box>
                                <h2>Name: {power.name}</h2>
                                <h3>Tag: {power.tags}</h3>
                                <h3>description: {power.description}</h3>
                                <button id={power.id} onClick={props.delete}>Delete</button>
                                <button id={power.id} onClick={e => props.update(e, power)}>Update</button>
                                
                            </Box>
                        </div>
                    )}
                })
                
            }  
       
        </div>
    )
}

export default MyStuffFeed;