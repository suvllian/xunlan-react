import React, {Component} from 'react';
import Nav from './nav.js';
import Footer from './footer.js';
import './../../style/common.scss';

export default class App extends Component{
	render() {
		return (
			<div>
				<Nav />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}