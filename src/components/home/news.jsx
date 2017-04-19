import React, {Component} from 'react';

export default class Footer extends Component {
	render() {
		return (
			<section className="news">
				<div className="container">
					<div className="section-title-1 text-center">	
						<h2><span className="blue-span">讯澜</span>焦点</h2>
					</div>
					<div className="row">
						{
							[1,2,3,4,5,6].map((item, index) => 
								<div className="col-md-4" key={index}>
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