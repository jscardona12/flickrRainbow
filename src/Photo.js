import React, { Component } from 'react';
import './App.css';

class Photo extends Component {
    constructor(props) {
        super(props);
        this.url = "https://farm"+
            this.props.photo.farm +
            ".staticflickr.com/" +
            this.props.photo.server +
            "/"+
            this.props.photo.id+
            "_" +
            this.props.photo.secret +
            "_s.jpg";
    }
    render() {
        return (
            <div>
                <img src={this.url}/>
            </div>
        );
    }
}

export default Photo;

