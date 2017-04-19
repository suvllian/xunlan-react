import React, {Component} from 'react';

export default class Product extends Component {
	render() {
		return (
			<section className="product">	
				<div className="container">
					<div className="section-title-2 text-center">
						<h2>我们的作品</h2>
					</div>
				</div>

				<div className="container">
					{
						[1, 2, 3, 4].map((item, index) => 
							<a href="#" key={index}>
								<div className="col-md-3">
									<img src="https://img.alicdn.com/tps/TB1LphILpXXXXb5XVXXXXXXXXXX-900-500.jpg" />
									<div>
										<p>啊是打不死的撒</p>
									</div>
								</div>
							</a>
						)
					}
				</div>
			</section>
		)
	}
}