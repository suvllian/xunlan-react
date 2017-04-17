import React, {Component} from 'react';
import {Link} from 'react-router';
import ImageBlock from './image.jsx';
import AboutHeader from './about-header.jsx';
import AboutContent from './about-content.jsx';

export default class About extends Component{
	render() {
		return (
			<div>
				<ImageBlock />
				<AboutHeader />
				<AboutContent />
			</div>
		)
	}
}