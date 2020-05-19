import React from 'react';
import './style.css';

const CharacterDetail = (props) =>{
    if (!props.character) return null;
    return(
        <>
            <h1>Name: {props.character.name}</h1>
            <p>Actor: {props.character.actor}</p>
            <p>Date of birth: {props.character.dateOfBirth}</p>
            <p>Ancestry: {props.character.ancestry}</p>
            <p>Wand {props.character.wand.wood} - {props.character.wand.core}</p>
            <p>Patronus: {props.character.patronus}</p>
            <img src={props.character.image } height="400px"/>
        </>
    )
}


export default CharacterDetail;