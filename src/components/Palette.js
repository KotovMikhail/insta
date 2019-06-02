import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner';
import InstaService from '../services/instaservice';


export default class Palette extends Component {
    InstaService = new InstaService();
    state = {
        photos: [],
        error: false,
        spinner: true 
    } 
    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError);
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            photos,
            error: false,
            spinner: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            spinner: false
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {src, alt, id} = item;
            return (
                <img src={src} alt={alt} key={id}></img>
            )
        })
    }

    render() {
        const {error, photos, spinner} = this.state;
        if (error) {
            return <ErrorMessage/>;
        }

        if (spinner) return <Spinner / >
        
        const items = this.renderItems(photos);


        return (
            <div className="palette">
                {items}
            </div>
        )
    }
}