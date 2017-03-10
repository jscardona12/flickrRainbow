/**
 * Created by Juan on 09/03/2017.
 */
import React, { Component } from 'react';
import './App.css';
import Photo from './Photo'
class PhotoColumn extends Component {

    render() {
        return (
            <div className=" col-md-2">
                {this.props.photos.map(photo=> {
                    return <Photo key={photo.id} photo={photo}/>
                })}
            </div>
        );
    }
}

export default PhotoColumn;

