import React, {Component} from 'react';

export default class Hot extends Component {
	render() {
		return (
			<section className="hot-article row">
			{
				this.props.hot.map((item, index) => 
					<div className="col-md-4" key={index}>
					  <a target="_blank" href={item.link}>
							<img className="hot-img" src={require("./../../assets/" + item.src)} />
							<p className="hot-title">{item.title}</p>
							<p className="hot-span">{item.content}</p>
						</a>
					</div>
				)
			}
			</section>
		)
	}

}