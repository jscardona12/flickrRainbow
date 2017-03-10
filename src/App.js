import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Photo from './Photo'

const ROOT_URL = "localhost:9000/flickr/"
class App extends Component {
    constructor(props) {
        super(props);
        this.colors = ["blue", "red", "green", "yellow", "orange", "cyan", "purple"];
        this.state = {
            busqueda: ""
        }

    }

    getPhotos(color) {
        axios.get(ROOT_URL + this.state.busqueda + " color")
            .then(response => {
                return response.data;
            })

    }

    getColorPhotos(){
        this.colors.forEach((c) => {
            var respond = this.getPhotos(c);
            this.setState({[c]:respond});
        });

    }

    componentDidMount(){
        this.colors.forEach((c) => {
            this.setState({[c]: []});
            console.log(this.state);
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2>Flickr Rainbow</h2>
                    <div className="inline">
                        <span
                            className="text-muted"> Search for something on Flickr and we will get you a rainbow of it</span>
                        <a href="https://jscardona12.github.io/MyWebPage/ "> by Juan Sebastian Cardona </a>
                    </div>


                </div>
                <div>
                    <span>
                    <input type="text" value={this.state.busqueda} onChange={(event) => {
                        this.setState({busqueda: event.target.value})
                    }}/>
                </span>
                    <button onClick={this.getColorPhotos()}> Buscar</button>
                    {this.colors.map(c => {
                        if (this.state && this.state[c]) {
                            console.log("EXISTE " + this.state[c]);
                            this.state[c].map(photo => {
                                <Photo/>
                            })
                        }
                    })}
                </div>

            </div>
        );
    }
}

export default App;
