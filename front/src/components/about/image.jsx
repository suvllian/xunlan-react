import React, {Component} from 'react';
import {Link} from 'react-router';

export default class ImageBlock extends Component{
	render() {
		return (
			<div className="about-image">
				<img src={require('./../../assets/about-' + (this.props.currentIndex+1) + '.jpg')} />
			</div>
		)
	}
}