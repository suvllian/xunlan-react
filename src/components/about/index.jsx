import React, {Component} from 'react';

import ImageBlock from './image.jsx';
import AboutHeader from './about-header.jsx';

import Organization from './organization.jsx';
import Department from './department.jsx';
import TimeLine from './timeline.jsx';

require("./index.scss");

export default class About extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			currentIndex: 0
		}
	}

	render() {
		return (
			<div>
				<ImageBlock 
				    currentIndex={this.state.currentIndex} />
				<AboutHeader
				    currentIndex={this.state.currentIndex} 
				    setActive={this.setActive.bind(this)} />
				{this.renderContent()}
			</div>
		)
	}

	renderContent() {
		let currentIndex = this.state.currentIndex;

		if (currentIndex == 0) {
			return <Organization />
		}

		if (currentIndex == 1) {
			return <Department />
		} 

		if (currentIndex == 2) {
			return <TimeLine />
		} 

		return <Organization />
	}

	setActive(index){
		this.setState({ currentIndex: index});
	}

	componentDidMount() {
		window.scrollTo(0,0);
	}
}