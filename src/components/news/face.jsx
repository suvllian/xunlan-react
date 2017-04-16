import React, {Component} from 'react';
import './../../style/face.scss';

export default class Face extends Component {
	render() {
		return (
			<section className="news-face">	
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-title-2 text-center">
								<h2>我们的面孔</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					{
						[1,1,1,1,1, 1,1,1,1,1, 1,1].map((item, index) => 
							<div className="col-md-3">
								<div className="image-title">	
									<a href="">
										<img src="https://img.alicdn.com/tps/TB1LphILpXXXXb5XVXXXXXXXXXX-900-500.jpg" />
										<div className="title text-center">
											<h4>Project {index+1}</h4>
										</div>
									</a>
								</div>
							</div>
						)
					}
				</div>
			</section>
		)
	}

	
}