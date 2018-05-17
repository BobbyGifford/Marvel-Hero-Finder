import React from 'react'
import thorImg from "../../images/thor_1.jpg"
import ironmanImg from "../../images/ironman_1.jpg"
import captainamericaImg from "../../images/captainamerica_1.jpg"
import hulkImg from "../../images/hulk_1.jpg"
import {Link} from 'react-router-dom'
import "./popularHeroes.css"

const popularHeroes = [
    {
        title: "Thor",
        description: "Thor's description",
        image: thorImg
    },
    {
        title: "Iron Man",
        description: "Iron Man's description",
        image: ironmanImg
    },
    {
        title: "Captain America",
        description: "Captain America's description",
        image: captainamericaImg
    },
    {
        title: "Hulk",
        description: "Hulk's description",
        image: hulkImg
    },
];

const mapOverHeroes = () => {
    return popularHeroes.map(hero => {
        return (
            <div className="col s12 m3" key={hero.title}>
                <div className="card">
                    <div className="card-image">
                        <img className="popular-card" src={hero.image} alt={hero.title}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{hero.title}</span>
                        <p>{hero.description}</p>
                    </div>
                    <div className="card-action">
                    <Link className="waves-effect waves-light red darken-3 btn white-text"
                       to={`/profile/${hero.title}`}>View {hero.title}'s Profile</Link>
                    </div>
                </div>
            </div>
        )

    })
};

const PopularHeroes = () => {
    return (
        <div className="row center-align">
            {mapOverHeroes()}
        </div>
    )
};

export default PopularHeroes;