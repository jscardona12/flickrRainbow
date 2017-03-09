import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

const ROOT_URL = "localhost:9000/flickr/"
class App extends Component {
    constructor(props) {
        super(props);
        this.colors = ["blue","yellow","red","orange","green","purple", "pink" ];
        this.state={

        }
        this.colors.forEach((c)=>{
            this.setState({[c]:[]});
        })



    }
    getPhotos(busqueda,color) {
        axios.get(ROOT_URL+ busqueda + " color")
            .then(response => {
                return response.data;
            })

    }
    obtenerFotosRojo() {
        axios.get(ROOT_URL+ this.state.busqueda + " purple")
            .then(response => {
                this.setState({
                    fotosMorado: response.data
                })
            })
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2>Flickr Rainbow</h2>
                    <div className="inline">
                        <span className="text-muted"> Search for something on Flickr and we will get you a rainbow of it              </span>
                        <a href="https://jscardona12.github.io/MyWebPage/ " > by Juan Sebastian Cardona </a>
                    </div>
                    <input type="text" value={this.state.busqueda} onChange={(event) => {
                        this.setState({busqueda: event.target.value})
                    }}/>
                </div>

            </div>
        );
    }
}

export default App;
