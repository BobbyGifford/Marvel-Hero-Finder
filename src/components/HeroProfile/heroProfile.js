import React from 'react'

const HeroProfile = (props) => {
    console.log(props.match.params.id);

    return (
        <div className="container">
            <div className="center" style={{backgroundColor: 'rgba(240, 248, 255, 0.8)', height: '80vh'}}>
                <h1>
                    {props.match.params.id}
                </h1>
            </div>
        </div>
    )
};

export default HeroProfile;