import React, {Component} from 'react';

const friendItems = [
	{title: "长安大学官网", src: "http://www.chd.edu.cn/"},
	{title: "长安大学信息门户", src: "http://ids.chd.edu.cn/authserver/login?service=http%3A%2F%2Fportal.chd.edu.cn%2F"},
	{title: "长安大学先锋家园", src: "http://xfjy.chd.edu.cn/"},
	{title: "长安大学图书馆", src: "http://lib.chd.edu.cn/"},
	{title: "长安大学教学管理信息系统", src: "http://cmis.chd.edu.cn/"}
]

export default class Friend extends Component {
	render() {
		return (
			<section className="friend">
				<div className="container">
					<div className="section-title-1 text-center">	
						<h2><span className="blue-span">网站</span>链接</h2>
					</div>
					<ul className="friend-items row">
						{
							friendItems.map((item, index) => 
								<li className="friend-item col-md-20" key={index}>
									<a href={item.src} target="_blank">{item.title}</a>
								</li>
							)
						}
					</ul>
				</div>
			</section>
		)
	}

}