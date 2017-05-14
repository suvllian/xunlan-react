import React, {Component} from 'react';

export default class Face extends Component {
	render() {
		return (
			<section className="news-face">	
				<div className="container">
					<div className="section-title-1 text-center">
						<h2>我们的<span className="blue-span">面孔</span></h2>
					</div>
				</div>

				<div className="container">
					<div className="row face-water">
						{
							[1,1,1,1,1, 1,1,1,1,1, 1,1].map((item, index) => 
								<div className="face-block" key={index}>
									<div className="image-title">	
										<img src={ "/static/img/" + (index+1) + ".jpg"} />
										<div className="title text-center">
											<h4>Project {index+1}</h4>
										</div>
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