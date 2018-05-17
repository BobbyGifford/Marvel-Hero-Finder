import React from 'react'
import {Link} from 'react-router-dom'
import "./home.css"


const Home = () => {
    return (
        <div className="container">
            <div className="row center-align">
                <h1>Welcome</h1>
                <div className="col s12">
                    <Link className="btn btn-feature waves-effect waves-light red darken-3 btn white-text"
                          to="/search">
                        Search for hero
                    </Link>
                </div>

                <div className="col s12">
                    <Link className="btn btn-feature waves-effect waves-light red darken-3 btn white-text"
                          to="/popular">
                        View popular heroes
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Home;