import React, {Component} from 'react';
import { Link } from 'react-router';

import NavItem from './../item/nav-item.jsx';
import './../../style/nav.scss';

export default class Nav extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			items: [
				{ title: "首页" , link: "/", isActive: true},
				{ title: "新闻部" , link: "/news", isActive: false},
				{ title: "技术部" , link: "/tech", isActive: false},
				{ title: "关于讯澜" , link: "/about", isActive: false},
			],
			currentItem: "首页"
		}

		this.changeActive = this.changeActive.bind(this);
	}

	changeActive(item) {
		this.setState({ currentItem: item});
	}

	render() {
		return (
			<header className="header">
				<div className="header-container">
					<div className="header-nav">
						<h1 className="logo"><a href="">XUNLAN</a></h1>
						<nav className="nav">
							<NavItem changeActive={this.changeActive} items={this.state.items} currentItem={this.state.currentItem} />												
						</nav>
					</div>
				</div>
			</header>
		)
	}
}