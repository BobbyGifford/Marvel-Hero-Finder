import React from 'react'
import {Router, Route} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import MainSearch from '../components/MainSearch/mainSearch'
import Home from '../components/Home/home'
import Navbar from '../components/Navbar/navbar'

export const history = createHistory();

const MainRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Navbar/>
                <Route exact path="/" component={Home} />
                <Route path="/search" component={MainSearch} />
            </div>
        </Router>
    )
};

export default MainRouter;