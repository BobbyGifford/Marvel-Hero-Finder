import React from 'react'
import {Router, Route} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import MainSearch from '../components/MainSearch/mainSearch'
import Home from '../components/Home/home'
import Navbar from '../components/Navbar/navbar'
import PopularHeroes from '../components/PopularHeroes/popularHeroes'
import HeroProfile from '../components/HeroProfile/heroProfile'
import Event from '../components/Event/event'
import bgImage from '../images/background_collage.jpg'

export const history = createHistory();



const MainRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Navbar/>
                <Route exact path="/" component={Home}/>
                <Route path="/search" component={MainSearch}/>
                <Route path="/popular" component={PopularHeroes}/>
                <Route path="/profile/:id" component={HeroProfile} />
                <Route path="/event/:name" component={Event} />
            </div>
        </Router>
    )
};

export default MainRouter;