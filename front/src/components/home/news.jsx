import React, {Component} from 'react';

import newsBg from './../../assets/newsbg.png';

const bgStyle = {
	backgroundImage: `url(${newsBg})`
}

export default class Footer extends Component {
	render() {
		const  newsList = this.props.news.slice(0, 3);

		return (
			<section className="news" style={bgStyle}>
				<div className="container">
					<div className="section-title-1">	
						<h2><span className="blue-span">讯澜</span>焦点</h2>
					</div>
					<div className="row">
						<div className="col-md-7">
							{
								newsList.map((item, index) => 
									<div className="col-md-4" key={index}>
										<a className="news-block" href={item.link} target="_blank">
											<img src={item.imgSrc} className="response-img" />
											<div className="news-info">
												<h2 className="news-title">{item.title}</h2>
												<p className="news-p">{item.brief}</p>
												<p>{item.aTime}</p>
											</div>
										</a>
									</div>
								)
							}
						</div>

						<div className="col-md-5">
							<ul>
								{
									this.props.news.map((item, index) => 
										<li className="news-item" key={index}>
											<a href={item.link} target="_blank" className="new-link">
												<span>{item.title}</span>
											</a>
											<span className="text-right">{item.aTime}</span>
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