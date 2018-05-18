import React, {Component} from 'react'
import axios from 'axios'
import CharacterCard from '../CharacterCard/characterCard'
import apiKey from "../../config/apikey";
import apiBase from "../../config/apibase";

class Event extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            description: null,
            start: null,
            characters: [],
            image: null,
            firstLoader: true,
            secondLoader: true,
        }
    }

    componentDidMount() {
        let id = null;
        axios.get(`${apiBase.base}/events?apikey=${apiKey.key}&name=${this.props.match.params.name}`)
            .then((res) => {
                console.log(res.data.data.results[0]);
                let rawData = res.data.data.results[0];
                const testDate = new Date(rawData.start);
                const formatDate = testDate.toDateString();
                id = rawData.id;

                this.setState({
                    start: formatDate,
                    description: rawData.description,
                    image: rawData.thumbnail.path + "." + rawData.thumbnail.extension,
                    id: rawData.id,
                    firstLoader: false
                });
                this.searchForCharacters(rawData.id)
            });

    }

    searchForCharacters(id) {
        axios.get(`${apiBase.base}/events/${id}/characters?apikey=${apiKey.key}&limit=100`)
            .then((res) => {
                console.log(res.data.data.results);
                let rawData = res.data.data.results;
                let newCharactersList = this.state.characters;

                for (let character of rawData) {
                    let name = character.name;
                    let description = character.description;
                    let image = character.thumbnail.path + "." + character.thumbnail.extension;
                    let newCharacter = {name, description, image};
                    newCharactersList.push(newCharacter);
                }
                this.setState({
                    characters: newCharactersList,
                    secondLoader: false
                });
                console.log(newCharactersList)
            })

    }

    render() {
        return (
            <div>
                {
                    this.state.firstLoader === true ?
                        <div>
                            <h3>Loading Event</h3>
                            <div className="progress">
                                <div className="indeterminate"/>
                            </div>
                        </div>

                        :

                    <div className="center" style={{
                    backgroundColor: 'rgba(240, 248, 255, 0.9)',
                    paddingBottom: '2vh',
                    paddingLeft: '2vw',
                    paddingRight: '2vw',
                    maxHeight: '100vh'
                }}>
                    <h1>{this.props.match.params.name}</h1>
                    <img style={{maxWidth: '40%'}} src={`${this.state.image}`} alt={this.state.name}/>
                    <h6>Started on: {this.state.start}</h6>
                    <p>{this.state.description}</p>
                    <h5>Characters</h5>
                    </div>

                }

                { this.state.secondLoader === true ?
                    <div>
                        <h3>Loading Characters</h3>
                        <div className="progress">
                            <div className="indeterminate"/>
                        </div>
                    </div>

                    :

                    <div className="row">
                        {this.state.characters.map((character) => {
                            return (
                                <div className="col s12 m3"
                                     key={character.name}
                                     style={{height: "40vh"}}>
                                    <CharacterCard name={character.name}
                                                   image={character.image}/>
                                </div>
                            )
                        })
                        }
                    </div>

                }

            </div>
        )
    }
}

export default Event;

//https://gateway.marvel.com:443/v1/public/events/id/characters?apikey=e997cd1b6f3b91f4713b3ae5b5a8fc74