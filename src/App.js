import React, {Component} from 'react';
import Navbar from './components/Navbar/navbar'
import MainRouter from './router/MainRouter'
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <MainRouter/>
            </div>
        );
    }
}

export default App;
