import React, {Component} from 'react';
require('./footer.scss');

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer-container">
					<p className="foot-p f-left"><small>© 2017 讯澜工作社. All Rights Reserved</small></p>
					<p className="foot-p f-right"><small>执着、进步、高效、卓越</small></p>
				</div>
			</footer>
		)
	}	
}