import React, {Component} from 'react';
import User from './User'

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630" alt="prince" 
                    name="Harry_the_prince"/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    Some account
                </div>
                <div className="post__descr">
                First published in 1869, Nature is the world's leading multidisciplinary science journal. Nature publishes the finest peer-reviewed research that drives.
                </div>
            </div>
        )
    }
}