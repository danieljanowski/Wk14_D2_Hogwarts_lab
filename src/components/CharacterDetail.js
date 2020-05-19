import React from 'react';

const CharacterDetail = (props) =>{
    if (!props.character) return null;
    return(
        <>
           <h1>Name: {props.character.name}</h1>
           <h5>Actor: {props.character.actor}</h5>
            <img src={props.character.image } height="400px"/>
        </>
    )
}


export default CharacterDetail;