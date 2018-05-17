import React, {Component} from 'react'
import axios from 'axios'
import apiKey from "../../config/apikey";
import apiBase from "../../config/apibase";

class HeroProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            name: null,
            image: null,
            description: null,
            events: []
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get(`${apiBase.base}/characters?apikey=${apiKey.key}&name=${this.props.match.params.id}`)
            .then((res) => {
                console.log(res.data.data.results[0]);
                let rawData = res.data.data.results[0];
                this.setState({
                    description: rawData.description,
                    image: `${rawData.thumbnail.path}.jpg`,
                    events: rawData.events.items
                })
            }).then(
            this.setState({loading: false})
        )
    }

    render() {
        return (
            <div className="container">
                <div className="center" style={{
                    backgroundColor: 'rgba(240, 248, 255, 0.8)',
                    paddingBottom: '2vh',
                    paddingLeft: '2vw',
                    paddingRight: '2vw',
                    maxHeight: '100vh'
                }}>
                    {this.state.loading === true ?
                        <div>loading</div> :
                        <div className="row">
                            <h1>{this.props.match.params.id}</h1>
                            <img style={{maxWidth: '40%'}} src={`${this.state.image}`} alt={this.state.name}/>
                            <p>{this.state.description}</p>
                            <h3>Events involving {this.props.match.params.id}</h3>
                            {this.state.events.map(event => {
                                return (
                                    <div className="col s3" key={event.name}>
                                        {event.name}
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default HeroProfile;

//https://gateway.marvel.com:443/v1/public/events?name=Acts%20of%20Vengeance!&apikey=e997cd1b6f3b91f4713b3ae5b5a8fc74