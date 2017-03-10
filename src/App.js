import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import PhotoColumn from './PhotoColumn'
const ROOT_URL = "https://flickrrainbow.herokuapp.com/flickr/"

let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: ""
        }

    }

    getPhotos(color) {


    }

    getColorPhotos() {
        colors.forEach((c) => {
            console.log(ROOT_URL + this.state.busqueda + " " + c)
            axios.get(ROOT_URL + this.state.busqueda + " " + c)
                .then(response => {
                    this.setState({[c]: response.data.photos.photo});
                })

        });

    }

    componentWillMount() {
        colors.forEach((c) => {
            this.setState({[c]: []});
            console.log("Hola ");
            console.log(this.state[c]);
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
                    <button onClick={this.getColorPhotos.bind(this)}> Buscar</button>
                </div>
                <div className="text-vertical-center">
                    <h1>THIS IS YOUR RAINBOW</h1>
                </div>
                <div className="container">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        {colors.map((c, index) => {
                            if (this.state && this.state[c]) {
                                return <PhotoColumn key={index} photos={this.state[c]}/>

                            }
                        })}
                    </div>

                </div>
            </div>

        );
    }
}

export default App;
