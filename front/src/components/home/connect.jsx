import React, {Component} from 'react';

export default class Connect extends Component {
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<section className="connect">	
				<div className="container">
					<div className="section-title-1 text-center">	
						<h2>联系<span className="blue-span">我们</span></h2>
					</div>
					<form className="row">
						<div className="col-md-6">
							<p className="connect-p">欢迎你与我们分享你的想法</p>
							<ul>
								<li className="connect-item">
									<i></i>
									地址：行政楼13层1305室
								</li>
								<li className="connect-item">
									<i></i>
									电话：029-5282425
								</li>
								<li className="connect-item">
									<i></i>
									邮箱：chdxunlan@163.com
								</li>
								<li className="connect-item">
									<i></i>
									网址：xunlan.chd.edu.cn
								</li>
							</ul>
						</div>

						<div className="col-md-6">
							<div className="col-md-6 connect-input">
								<input className="form-control" placeholder="姓名" type="text" />
							</div>
							<div className="col-md-6 connect-input">
								<input className="form-control" placeholder="邮箱" type="text" />
							</div>
							<div className="col-md-12">
								<textarea className="form-control" placeholder="留言"></textarea>
							</div>
							<div className="col-md-3">
								<input className="submit-btn" value="发送" type="submit" />
							</div>
						</div>
					</form>
				</div>
			</section>
		)
	}

	
}