import React from 'react'

const styles = {
    image: {
        maxWidth: "40%",
        marginLeft: "30%"
    }
};

const CharacterCard = ({name, description, image}) => {
    return (
        <div className="center-align">
            <div className="card">
                <div className="card-image">
                    <img src={image} style={styles.image} alt={`${name} has no pic`}/>
                </div>
                <div className="card-content">
                    <span className="card-title">{name}</span>
                    <p>{description}</p>
                </div>
                {/*<div className="card-action">*/}
                    {/*<Link className="waves-effect waves-light red darken-3 btn white-text"*/}
                          {/*to={`/profile/${hero.title}`}>View {hero.title}'s Profile</Link>*/}
                {/*</div>*/}
            </div>

        </div>
    )
};

export default CharacterCard;