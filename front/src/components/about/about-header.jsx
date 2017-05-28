import React, {Component} from 'react';

const navItems = [
	{ title: "组织介绍", isCurrent: true},	
	{ title: "部门介绍", isCurrent: false},	
	{ title: "讯澜大事记", isCurrent: false}
]

export default class AboutHeader extends Component{
	render() {
		return (
			<header className="about-header">
				<div className="container">
					<div className="blue-slider" ref="blueSlider"></div>
					<ul>
						{
							navItems.map((item, index) => 
								<li key={index} 
								    className={(this.props.currentIndex === index) ? 'active li-item' : 'li-item'}
								    onMouseEnter={this.sliderHeader.bind(this, index)}
								    onMouseLeave={this.resetHeader.bind(this)}
								    onClick={this.setActiveIndex.bind(this, index)}>
									<span className="color-block"></span>	
									{item.title}
								</li>
							)
						}
					</ul>
				</div>
			</header>
		)
	}

	sliderHeader(index){
		let blueSlider = this.refs.blueSlider;
		// 动态获取li的宽度
		let width      = parseInt(blueSlider.offsetWidth);
		let leftOffset = index * width;
		blueSlider.style.left = leftOffset + "px";
	}

	setActiveIndex(index){
		this.props.setActive(index);
	}

	resetHeader(){
		this.sliderHeader(this.props.currentIndex);
	}
}