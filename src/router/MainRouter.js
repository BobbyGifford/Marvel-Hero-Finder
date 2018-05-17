import React from 'react'
import {Router, Route} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import MainSearch from '../components/MainSearch/mainSearch'
import Home from '../components/Home/home'
import Navbar from '../components/Navbar/navbar'
import PopularHeroes from '../components/PopularHeroes/popularHeroes'
import bgImage from '../images/background_collage.jpg'

export const history = createHistory();

const style = {
    container: {
        height: "90vh",
        width: "100%",
        maxWidth: "98vw"
    },
    background: {
        height: '100vh',
        backgroundImage: `url(${bgImage})`
    }
};



const MainRouter = () => {
    return (
        <Router history={history}>
            <div style={style.background}>
                <Navbar/>
                <Route exact path="/" component={Home}/>
                <Route path="/search" component={MainSearch}/>
                <Route path="/popular" component={PopularHeroes}/>
            </div>
        </Router>
    )
};

export default MainRouter;