import React from 'react'
import {Link} from 'react-router-dom'
import "./home.css"

const Home = () => {
    return (
        <div className="bg-mid">
            <div className="container home-bg">
                <div className="row center-align">
                    <h1>Marvel Heroes</h1>
                    <hr/>
                    <p>
                        The data that is retrieved by this site is owned by Marvel. I do not own any of their properties.
                        This site is meant for experimental and educational purposes.
                        <br />
                        Data provided by Marvel. © 2018 MARVEL

                        {/*<a href="http://marvel.com">Data provided by Marvel. © 2018 MARVEL</a>*/}
                    </p>
                    <hr/>

                    <div className="col s12">
                        <Link className="btn btn-feature waves-effect waves-light red darken-3 btn white-text"
                              to="/popular">
                            View popular heroes
                        </Link>
                    </div>


                    <div className="col s12">
                        <Link className="btn btn-feature waves-effect waves-light red darken-3 btn white-text"
                              to="/search">
                            Search for hero
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Home;