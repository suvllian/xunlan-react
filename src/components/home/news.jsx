import React, {Component} from 'react';

import newsBg from './../../assets/newsbg.png';

const bgStyle = {
	backgroundImage: `url(${newsBg})`
}

export default class Footer extends Component {
	render() {
		return (
			<section className="news" style={bgStyle}>
				<div className="container">
					<div className="section-title-1">	
						<h2><span className="blue-span">讯澜</span>焦点</h2>
					</div>
					<div className="row">
						<div className="col-md-7">
							{
								[1,2,3].map((item, index) => 
									<div className="col-md-4">
										<a className="news-block">
											<img src="http://suvllian.com/static/images/travel/qingdao1.jpg" className="response-img" />
											<div className="news-info">
												<h2 className="news-title">长安大学讯澜工作社长安大学讯澜工作社</h2>
												<p className="news-p">新一轮纳新开始了长安大学讯澜工作社长安大学讯澜工作社</p>
												<p>2017-2-11</p>
											</div>
										</a>
									</div>
								)
							}
						</div>

						<div className="col-md-5">
							<ul>
								{
									[1,2,3,4,5,6,7].map((item, index) => 
										<li className="news-item" key={index}>
											<a href="" target="_blank">
												<span>学校召开教师干部大会 宣布校长任免决定</span>
											</a>
											<span className="text-right">2017-5-10</span>
										</li>	
									)
								}
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}

}