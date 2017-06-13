import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Organization extends Component{
	render() {
		return (
			<div className="container about-padding">
				<img src={ require("./../../assets/about-item1-1.jpg") } />
				<p className="about-p">
					讯澜工作社是直属于校党委宣传部的学生宣传思想工作团队，担负着网络维护、专题制作、稿件编辑、官方微博微信运营等重要工作。
				</p>

				<p className="about-p">
					长安大学讯澜工作社（原名讯澜工作室）成立于2003年9月，是校党委宣传部直属的宣传思想工作学生团队。致力于学校新媒体平台的运营，学校网站的建设与开发，中国大学生在线长安大学通讯站、与道同行共建频道的建设等工作。 讯澜工作社一直以来用技术和文字服务于长安大学的学生宣传工作，在计算机Web技术和新闻传媒中书写个性和精彩，努力打造专业的Web技术和互联网新闻传媒团队。
				</p>

				<p className="about-p">
					目前，讯澜工作社包括新闻编辑部，技术部，新媒体运营部，秘书处四个部门。各个部门各司其职、相互合作、共同努力，为长安大学的宣传工作贡献着自己的力量。
				</p>

				<p className="about-p">
					经过12年的执着进取，讯澜工作社已发展成为在校内有一定影响力的宣传思想工作学生团队。
				</p>
				<p className="about-p">
					<strong>我们的团队理念：</strong>执着、进步、高效、卓越。
				</p>
			</div>
		)
	}
}