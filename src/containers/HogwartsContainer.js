import React, {Component} from 'react';
import CharacterSelector from '../components/CharacterSelector.js'
import CharacterDetail from '../components/CharacterDetail.js';
import HouseSelector from '../components/HouseSelector.js';

class HogwartsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
            selectedCharacter: '',
            filteredCharacters: ''
        };
        this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
        this.handleHouseSelected = this.handleHouseSelected.bind(this);
    }

    handleCharacterSelected(name){
        this.setState({selectedCharacter: name})
    }

    handleHouseSelected(house){
        this.setState({filteredCharacters:  this.state.characters.filter(character => { return character.house === house })});  
    }

        componentDidMount(){
            const url = 'http://hp-api.herokuapp.com/api/characters';
            fetch(url)
            .then( res => res.json())
            .then(characters => this.setState({characters: characters}))
            .catch(err => console.err(err))
        }
    
    render() {

        if (!this.state.characters) {
            return <h2>Loading...</h2>
          };  

        const selectedCharacter = this.state.characters.find(
            character => {
                return character.name === this.state.selectedCharacter
            }
        );

        return (
            <>
                <HouseSelector onHouseSelected = {this.handleHouseSelected} />
                <CharacterSelector 
                characters = {this.state.filteredCharacters}
                onCharacterSelected = {this.handleCharacterSelected}
                ></CharacterSelector>
                <CharacterDetail character = {selectedCharacter} />
            </>
        );
    }
}

export default HogwartsContainer;