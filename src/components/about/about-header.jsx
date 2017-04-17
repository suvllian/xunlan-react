import React, {Component} from 'react';
import {Link} from 'react-router';

const navItems = [
		{ title: "组织介绍"},	
		{ title: "部门介绍"},	
		{ title: "讯澜大事记"},	
		{ title: "讯澜生活"},	
		{ title: "讯澜引力"},	
	]

export default class AboutHeader extends Component{
	render() {
		return (
			<header className="about-header">
				<div className="container">
					<div id="blue-slider" ref="blueSlider"></div>
					<ul>
						{
							navItems.map((item, index) => 
								<li key={index}>
									<span></span>	
									{item.title}
								</li>
							)
						}
					</ul>
				</div>
			</header>
		)
	}
}