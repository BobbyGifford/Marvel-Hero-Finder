import React, {Component} from 'react'
import SearchFrom from './searchForm'
import CharacterCard from '../CharacterCard/characterCard'

class MainSearch extends Component {
    constructor() {
        super();

        this.state = {
            nameSearch: '',
            searched: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler = (e) => {
        console.log(e.target.value);
        this.setState({nameSearch: e.target.value})
    };

    handleSubmit = (e) => {
        this.setState({searched: true});
        console.log(this.state.nameSearch);
        e.preventDefault()
    };

    render() {
        return (
            <div className="container center" style={{marginTop: "5vh"}}>

                <SearchFrom onChange={this.changeHandler} handleSubmit={this.handleSubmit} inputValue={this.state.nameSearch}/>

                {this.state.searched ? <CharacterCard name={"Juice"} description={"big juice"} /> : null}

            </div>

        )
    }
}

export default MainSearch;