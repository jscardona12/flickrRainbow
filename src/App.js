import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

const ROOT_URL = "localhost:9000/flickr/"
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fotosAzul: [],
            fotosRojo:[],
            fotosNaranja:[],
            fotosAmarillo:[],
            fotosVerde:[],
            fotosMorado:[],
            busqueda: '',
            codigo: '',
            nota: ''
        }
    }
    obtenerFotos() {
        axios.get(ROOT_URL+ this.state.busqueda + " blue")
            .then(response => {
                this.setState({
                    fotosAzul: response.data
                })
            })
        axios.get(ROOT_URL+ this.state.busqueda + " red")
            .then(response => {
                this.setState({
                    fotosRojo: response.data
                })
            })
        axios.get(ROOT_URL+ this.state.busqueda + " yellow")
            .then(response => {
                this.setState({
                    fotosAmarillo: response.data
                })
            })
        axios.get(ROOT_URL+ this.state.busqueda + " green")
            .then(response => {
                this.setState({
                    fotosVerde: response.data
                })
            })
        axios.get(ROOT_URL+ this.state.busqueda + " orange")
            .then(response => {
                this.setState({
                    fotosNaranja: response.data
                })
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
                        <p > Search for something on Flickr and we will get you a rainbow of it</p>
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
