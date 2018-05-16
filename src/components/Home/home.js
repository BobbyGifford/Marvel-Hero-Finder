import React from 'react'
import {Link} from 'react-router-dom'
import MainSearch from '../MainSearch/mainSearch'

const Home = () => {
    return (
        <div className="container">
            <div className="row center-align">
                <div className="">
                    <h1>Welcome</h1>
                    <Link className="btn waves-effect waves-light red darken-3 btn white-text" to="/search">
                        Search for hero
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Home;