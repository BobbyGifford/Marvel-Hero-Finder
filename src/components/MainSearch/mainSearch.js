import React, {Component} from 'react'
import SearchFrom from './searchForm'
import CharacterCard from '../CharacterCard/characterCard'
import axios from 'axios'
import apiBase from "../../config/apibase"
import apiKey from "../../config/apikey"
import './mainSearch.css'

class MainSearch extends Component {
    constructor() {
        super();

        this.state = {
            nameSearch: '',
            searched: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.setSearched = this.setSearched.bind(this);
    }

    changeHandler = (e) => {
        console.log(e.target.value);
        this.setState({nameSearch: e.target.value})
    };

    setSearched = (value) => {
        this.setState({searched: value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setSearched(false);
        axios.get(`${apiBase.base}/characters?apikey=${apiKey.key}&name=${this.state.nameSearch}`)
            .then((res) => {

                console.log(res.data.data.results[0]);
                let rawData = res.data.data.results[0];

                if (rawData === null || rawData === undefined) {
                    this.setState({name: "Sorry No Result", description: "Please check your spelling."})
                } else {
                    this.setState({
                        name: rawData.name,
                        description: rawData.description,
                        mainImg: rawData.thumbnail.path + ".jpg"
                    });
                }
            }, this.setState({searched: true}));

    };

    render() {
        return (
            <div className="container center bg-area" style={{marginTop: "5vh"}}>

                <SearchFrom onChange={this.changeHandler} handleSubmit={this.handleSubmit}
                            inputValue={this.state.nameSearch}/>

                {this.state.searched ?
                    <CharacterCard
                        name={this.state.name}
                        description={this.state.description}
                        image={this.state.mainImg}/> : null}

            </div>

        )
    }
}

export default MainSearch;