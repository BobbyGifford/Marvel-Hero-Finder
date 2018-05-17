import React from 'react'

const styles = {
    image: {
        maxWidth: "40%"
    }
};

const CharacterCard = ({name, description, image}) => {
    if ({name} !== undefined || {name} !== null) {
        return (
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <img src={image} style={styles.image} alt={`${name} has no pic`}/>
            </div>
        )
    } else {
        return (
            <div>
                spinner
            </div>
        )
    }
};

export default CharacterCard;