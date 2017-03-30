import React, {Component} from 'react';
import { Link } from 'react-router';
import './../../style/nav.scss';

export default class Nav extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			liItems:[
				{title:"首页",src:'/',isActive:true},
				{title:"新闻部",src:'/news',isActive:false},
				{title:"技术部",src:'/technology',isActive:false},
				{title:"了解讯澜",src:'/about',isActive:false},
				{title:"加入讯澜",src:'/about',isActive:false},
			]
		}
	}

	render() {
		return (
			<header className="header">
				<div className="header-container">
					<div className="header-nav">
						<h1 className="logo"><a href="">XUNLAN</a></h1>
						<nav className="nav">
							<ul className="nav-ul">
								<li className='active'>
									<Link to="/">首页</Link>
								</li>
								<li>
									<Link to="/news">新闻</Link>
								</li>						
							</ul>
						</nav>
					</div>
				</div>
			</header>
		)
	}
}