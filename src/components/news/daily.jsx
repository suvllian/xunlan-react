import React, {Component} from 'react';
import './../../style/daily.scss';

export default class Daily extends Component {
	render() {
		return (
			<section className="daily">	
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-title-2 text-center">
								<h2>我们的日常</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="daily-block">
					<div className="container">
						<div className="col-md-6">
							<img src="https://img.alicdn.com/tps/TB1LphILpXXXXb5XVXXXXXXXXXX-900-500.jpg" />
						</div>

						<div className="col-md-6">
							<p>中大在线平台，中大在线长安大学通讯站微博的介绍与链接</p>
						</div>
					</div>
				</div>

				<div className="daily-block">
					<div className="container">
						<div className="col-md-6">
							<p>办公室环境，例会剪影的简单介绍和照片</p>
						</div>

						<div className="col-md-6">
							<img src="https://img.alicdn.com/tps/TB1LphILpXXXXb5XVXXXXXXXXXX-900-500.jpg" />
						</div>
					</div>
				</div>
			</section>
		)
	}

	
}