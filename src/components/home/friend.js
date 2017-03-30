import React, {Component} from 'react';
import './../../style/friend.scss';

export default class Footer extends Component {
	render() {
		return (
			<section className="friend">
				<div className="container">
					<div className="section-title-1 text-center">	
						<h2>友情链接</h2>
					</div>
					{
						[1,2,3,4,5].map((item, index) => 
							<div className="friend-item">
								<a href="http://suvllian.com" target="_blank">友情链接</a>
							</div>
						)
					}
				</div>
			</section>
		)
	}

}