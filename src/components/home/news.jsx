import React, {Component} from 'react';
import SectionHeader from './section-header.jsx';
import './../../style/news.scss';

export default class Footer extends Component {
	render() {
		return (
			<section className="news">
				<div className="container">
					<SectionHeader />
					<div className="row">
						{
							[1,2,3,4,5,6].map((item, index) => 
								<div className="col-md-4">
									<a className="img-group">
										<img src="http://suvllian.com/static/images/travel/qingdao1.jpg" className="response-img" />
										<div className="news-text">
											<h2>长安大学讯澜工作社</h2>
											<p>新一轮纳新开始了</p>
										</div>
									</a>
								</div>
							)
						}
					</div>
				</div>
			</section>
		)
	}

}