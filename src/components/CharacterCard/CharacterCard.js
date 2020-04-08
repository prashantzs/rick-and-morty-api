import React from 'react';
import StyledCharacterCard from './StyledCharacterCard';

const CharacterCard = ({character}) => {
    return (
        <div className="column is-one-quarter-tablet is-half-mobile">
            <StyledCharacterCard>
                <img src={character.image} alt={character.name}/>
                <p>{character.name}</p>
            </StyledCharacterCard>
        </div>
    )
};

export default CharacterCard;