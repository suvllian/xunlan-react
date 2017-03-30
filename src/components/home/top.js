import React, {Component} from 'react';
import './../../style/slider.scss';

export default class Top extends Component {
	setHeight(){
		let slider = document.querySelector(".slider");
		let height = document.documentElement.clientHeight;
		slider.style.height = height + 'px';
	}

	componentDidMount() {
		this.setHeight();
	}

	render() {
		return (
			<section className="slider">	
				<div className="container">
					<div className="section-inner">
						<h1 className="welcome-h">欢迎来到讯澜工作社</h1>
					</div>
				</div>
			</section>
		)
	}

	
}