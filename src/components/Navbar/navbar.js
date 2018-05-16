import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper red darken-3">
                    <div className="hide-on-small-only">
                        <Link to="/" className="brand-logo center">Marvel Hero Search</Link>
                    </div>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="left hide-on-med-and-down">
                        <li>
                            <Link to='/'>
                                <i
                            className="material-icons">home
                                </i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/search'>
                                <i
                                    className="material-icons">search
                                </i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul
                className="sidenav"
                id="mobile-demo">
                <li>
                    <Link to='/'>
                        <i
                            className="material-icons">home
                        </i>
                    </Link>
                </li>
                <li>
                    <Link to='/search'>
                        <i
                            className="material-icons">search
                        </i>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;