import React, { Component } from 'react';
require("./index.scss");

export default class Slider extends Component{
	constructor(props) {
		super(props);

		this.sliderImage = this.props.slider;
		this.state = {
			liLength: this.sliderImage.length,
			currentItem: 1
		}
	}

	render() {
		return (
			<div className="slider" ref="sliderContainer">
				<ul className="slider-items">
				{	
					this.sliderImage.map((item, index) =>
					{
						let klass = ((index+1) == this.state.currentItem) ? 
						  "slider-item slider-active" : "slider-item";
						return (
						  <li className={klass} key={index}>
						    <img src={require("./../../assets/" + item.imageSrc)} />
						  </li>
						)
					})
				}	
				</ul>
			</div>
		)
	}

	nextImage() {
		let next = 0,
	        now = this.state.currentItem;
		
		if (now == this.state.liLength) {
			next = 1;
		} else {
			next = now + 1;
		}
		return next;
	}

	slideImage() {
		let index = this.nextImage();
		this.setState({ currentItem: index });
	}

	componentDidMount() {
		let slideImage = this.slideImage.bind(this),
		    width = document.body.clientWidth;

		this.refs.sliderContainer.style.height = 0.43 * width + "px";
		this.handle = setInterval(slideImage, 5000);	
	}
}