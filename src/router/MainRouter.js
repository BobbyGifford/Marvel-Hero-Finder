import React from 'react'
import {Router, Route} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import MainSearch from '../components/MainSearch/mainSearch'

export const history = createHistory();

const MainRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Route exact path="/" component={MainSearch} />
            </div>
        </Router>
    )
};

export default MainRouter;