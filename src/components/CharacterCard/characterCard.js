import React from 'react'
import testImg from '../../images/altitude_2.jpeg'

const styles = {
    image: {
        maxWidth: "40%"
    }
};

const CharacterCard = ({name, description, image}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <img src={image} style={styles.image} alt={`${name} has no pic`} />
        </div>
    )
};

export default CharacterCard;