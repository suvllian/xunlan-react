import React from 'react';

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			liItems:[
				{title:"首页",src:'/',isActive:true},
				{title:"新闻周刊",src:'/news',isActive:false},
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
								{
									this.state.liItems.map((item, index) => 
										<li className={item.isActive ? 'active': ''}>
											<a>{item.title}</a>
										</li>
									)
								}
							</ul>
						</nav>
					</div>
				</div>
			</header>
		)
	}
}