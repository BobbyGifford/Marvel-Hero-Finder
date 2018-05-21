import React from 'react'
import popularHeroes from './popularHeroInfo'
import {Link} from 'react-router-dom'
import "./popularHeroes.css"

const mapOverHeroes = () => {
    return popularHeroes.map(hero => {
        return (
            <div className="col s12 m3" key={hero.title}>
                <div className="card">
                    <div className="card-image">
                        <Link to={`/profile/${hero.title}`}><img className="popular-card" src={hero.image} alt={hero.title}/></Link>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{hero.title}</span>
                        {/*<p>{hero.description}</p>*/}
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
            <h2>Popular Heroes</h2>
            {mapOverHeroes()}
        </div>
    )
};

export default PopularHeroes;