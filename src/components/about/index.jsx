import React, {Component} from 'react';

import ImageBlock from './image.jsx';
import AboutHeader from './about-header.jsx';
import AboutContent from './about-content.jsx';

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
				<AboutContent
				    currentIndex={this.state.currentIndex} />
			</div>
		)
	}

	setActive(index){
		this.setState({ currentIndex: index});
	}

	componentDidMount() {
		window.scrollTo(0,0);
	}
}