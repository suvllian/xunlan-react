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
					<div className="section-inner">
						<div className="section-title-1 text-center">	
							<h2>联系我们</h2>
						</div>
						<form>
							<div className="col-md-6">
								<p className="connect-p">Get in touch with us. Feel Free to use contact below. </p>
								<ul>
									<li className="item">
										<i></i>
										地址:行政楼
									</li>
									<li className="item">
										<i></i>
										电话:029-5282425
									</li>
									<li className="item">
										<i></i>
										邮箱:suvllian@163.com
									</li>
									<li className="item">
										<i></i>
										网址:xunlan.chd.edu.cn
									</li>
								</ul>
							</div>

							<div className="col-md-6">
								<div className="col-md-6">
									<input className="form-control" placeholder="姓名" type="text" />
								</div>
								<div className="col-md-6">
									<input className="form-control" placeholder="邮箱" type="text" />
								</div>
								<div className="col-md-12">
									<textarea className="form-control" placeholder="留言"></textarea>
								</div>
								<div className="col-md-12">
									<input className="submit-btn" value="Send Message" type="submit" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		)
	}

	
}