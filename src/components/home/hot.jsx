import React, {Component} from 'react';

export default class Hot extends Component {
	render() {
		return (
			<section className="hot-article row">
			{
				[0,1,2].map((item, index) => 
					<div className="col-md-4" key={index}>
						<img className="hot-img" src={ "./static/img/hot" + (index+1) + ".jpg"}  />
						<p className="hot-title">微信公众号文章</p>
						<p className="hot-span">微信公众号文章</p>
					</div>
				)
			}
			</section>
		)
	}

}