import React, {Component} from 'react';
import {Link} from 'react-router';

import AboutImage1 from './../../assets/2.jpg';

export default class ImageBlock extends Component{
	render() {
		return (
			<div className="about-image">
				<img src={AboutImage1} />
			</div>
		)
	}
}