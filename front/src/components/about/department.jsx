import React, {Component} from 'react';
import {Link} from 'react-router';

import picArray from './face-src.js';

export default class Department extends Component{
	render() {
		return (
			<div className="container about-face">
				<div>
					{
						picArray.map((item, bIndex) => 
							item.map((single, sIndex) => 
								<span className="faces">
							        <img src={single} />
							        <i></i>
							    </span>
							)
						)
					}
				</div>

				<div className="about-padding">
					<h2 className="about-h2">新闻编辑部</h2>
					<p className="about-p">主要负责教育部中国大学生在线和【与道同行】共建平台的投稿工作。<br/>
					对学校重大活动进行采稿、拍照工作，并及时上传、发表，以及采访稿的写作。</p>

					<h2 className="about-h2">网络技术部</h2>
					<p className="about-p">主要负责长安大学官方微信的功能开发和维护，中国大学生在线共建频道的前端网页的专题制作，网站开发以及维护工作等。</p>

					<h2 className="about-h2">新媒体运营部</h2>
					<p className="about-p">主要负责长安大学官方微信、微博的运营，是校内文化传播、师生交流、服务师生的良好平台。日常工作由编辑、设计师、摄影等职能共同承担完成。<br/>
					长安大学官方微信自2014年12月1日上线至今，短短一学期内粉丝量已突破两万，在校内有着良好口碑，影响至深。</p>

					<h2 className="about-h2">秘书处</h2>
					<p className="about-p">主要负责工作社的日常事务管理及与各部门之间的沟通联系，以及与校内其他兄弟组织的沟通和联系，<br/>具体工作包括：信息传达、财务管理、制度建设、文件草拟、对外交流合作等。</p>
				</div>
			</div>
		)
	}
}