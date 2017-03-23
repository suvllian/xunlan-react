import React from 'react';

export default class Top extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	setHeight(){
		let slider = document.querySelector(".slider");
		let height = document.documentElement.clientHeight - 88;
		slider.style.height = height + 'px';
	}

	componentDidMount() {
		this.setHeight();
	}

	render() {
		return (
			<section className="slider">	
				<div className="container">
					<div className="section-inner">
						<h1 className="welcome-h">欢迎来到讯澜工作社</h1>
					</div>
				</div>
			</section>
		)
	}

	
}