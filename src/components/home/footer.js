import React from 'react';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<footer>
				<div className="footer">
					<p className="foot-p"><small>已有1人次访问</small></p>
					<p className="foot-p"><small>© 2016 讯澜工作社. All Rights Reserved</small></p>
					<p className="foot-p"><small>Powered By <a href="http://suvllian.com">Suvllian</a></small></p>
				</div>
			</footer>
		)
	}

	
}