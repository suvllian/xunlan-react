import React, {Component} from 'react';

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

				<div className="container">
					<div className="row face-water">
						{
							[1,1,1,1,1, 1,1,1,1,1, 1,1].map((item, index) => 
								<div className="face-block">
									<div className="image-title">	
										<a href="">
											<img src={ "/static/" + (index+1) + ".jpg"} />
											<div className="title text-center">
												<h4>Project {index+1}</h4>
											</div>
										</a>
									</div>
								</div>
							)
						}
					</div>
				</div>
			</section>
		)
	}

	
}