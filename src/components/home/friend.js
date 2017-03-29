import React from 'react';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<section className="friend">
				<div className="container">
					{
						[1,2,3,4,5].map((item, index) => 
							<div className="friend-item">
								<a href="http://suvllian.com" target="_blank">友情链接</a>
							</div>
						)
					}
				</div>
			</section>
		)
	}

}