import React, {Component} from 'react';

require("./reset.scss");
require("./common.scss");

export default class App extends Component{
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}