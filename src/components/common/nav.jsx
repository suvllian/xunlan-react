import React, {Component} from 'react';
import { Link } from 'react-router';

import NavItem from './nav-item.jsx';
require('./nav.scss');

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
			currentItem: "首页",
			small: false
		}

		this.changeActive = this.changeActive.bind(this);
	}

	render() {
		let klass = this.state.small ? "header small-header" : "header";
		return (
			<header className={klass}>
				<div className="header-container">
					<h1 className="header-logo"><a href="">XUNLAN</a></h1>
					<nav className="header-nav">
						<NavItem changeActive={this.changeActive} items={this.state.items} currentItem={this.state.currentItem} />												
					</nav>
				</div>
			</header>
		)
	}

	changeActive(item) {
		this.setState({ currentItem: item});
	}

	/* 函数节流 */
	throttle(fn, time, atLeast) {
	    let timeHandle, startTime = new Date();
	    return function(){
	        var curTime = new Date();
	        clearTimeout(timeHandle);
	        if (curTime - startTime >= atLeast) {
	            fn();
	            startTime = curTime;
	        } else {
	            timeHandle = setTimeout(fn, time);
	        }
	    }
	}

	setHeaderClass() {
		let changeNav = () => {
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (scrollTop > 280 ) {
				let small = this.state.small;
				if (small) { return }
				else { this.setState({small: true}) }
			} else {
				this.setState({small: false})
			}
		}
		
		let slideNav = this.throttle(changeNav, 100, 1000);

		window.addEventListener("scroll", () => {
			slideNav();
		});

		window.onscroll = () => {
			slideNav();
		};

	}

	componentDidMount() {
		this.setHeaderClass();
	}
}