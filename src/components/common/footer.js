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
					<p className="foot-p f-left"><small>© 2017 讯澜工作社. All Rights Reserved</small></p>
					<p className="foot-p f-right"><small>Powered By <a href="http://suvllian.com" target="_blank">Suvllian</a></small></p>
				</div>
			</footer>
		)
	}

	
}