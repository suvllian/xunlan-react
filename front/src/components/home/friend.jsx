import React, {Component} from 'react';

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
							this.props.friends.map((item, index) => 
								<li className="friend-item col-md-20" key={index}>
									<a href={item.src} target="_blank">{item.content}</a>
								</li>
							)
						}
					</ul>
				</div>
			</section>
		)
	}

}