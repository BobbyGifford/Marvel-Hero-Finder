import React, {Component} from 'react';
import axios from 'axios'
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/home'
import './App.css';

class App extends Component {
    // componentDidMount() {
    //     axios.get("https://gateway.marvel.com:443/v1/public/characters?apikey=e997cd1b6f3b91f4713b3ae5b5a8fc74&name=hulk"
    //     ).then( res => {
    //         console.log(res.data.data.results);
    //
    //         let heroes = res.data.data.results;
    //
    //         for (let x of heroes){
    //             console.log(x.name)
    //         }
    //
    //
    //         // let heroes = res.data.results;
    //         // heroes.map(hero => {
    //         //     console.log(hero.name)
    //         // })
    //     })
    // }

    render() {
        return (
            <div>
                <Navbar/>
                <Home/>
            </div>
        );
    }
}

export default App;
