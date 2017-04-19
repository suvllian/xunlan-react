import React, {Component} from 'react';

import Background from './../../assets/news-bg.jpg';

const bg = {
	backgroundImage: `url(${Background})`
};

export default class Achieve extends Component {
	render() {
		return (
			<section className="achieve" style={bg}>	
				<div className="container">
					<div className="section-title-1 text-center">
						<h2>我们的<span className="blue-span">荣誉</span></h2>
					</div>

					<div className="achieve-p">
						<p>2014-2015年度教育部中国大学生在线十佳校园网络通讯站。</p>
						<p>2014-2015年度教育部中国大学生在线十佳共建频道。</p>
						<p>中国大学生在线优秀校网通站</p>
					</div>
				</div>
			</section>
		)
	}

	
}