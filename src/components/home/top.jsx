import React, {Component} from 'react';

export default class Top extends Component {
	constructor(props) {
		super(props);

		this.state = {
			liLength: 3,
			currentItem: 1
		}
	}

	render() {
		let array = (new Array(this.state.liLength)).fill(1);
		return (
			<section className="slider">	
				<ul className="slider-items">
				{
					array.map((item, index) =>
						<li className={((index+1) == this.state.currentItem) ? "slider-item slider-active" : "slider-item"}>
							<img src={ require("./../../assets/home-" + (index+1) + ".jpg") } />
						</li>
					)
				}			
				</ul>
			</section>
		)
	}

	nextImage() {
		let now = this.state.currentItem;
		let next = 0;
		if (now == this.state.liLength) {
			next = 1;
		} else {
			next = now + 1;
		}
		return next;
	}

	resetSlider() {
		this.slider.forEach((item, index) => {
			item.className = "slider-item";
		});
	}

	slideImage() {
		let index = this.nextImage();
		this.setState({ currentItem: index });
		this.resetSlider();
		this.slider[index-1].className = "slider-item slider-active";
	}

	componentDidMount() {
		this.slider = document.querySelectorAll(".slider-item");
		let slideImage = this.slideImage.bind(this);
		this.handle = setInterval(slideImage, 4000);

		let height = document.body.clientWidth;
		this.slider.forEach((item, index) => {
			item.style.height = height * 2 / 3 + "px";
		});
	}	
}