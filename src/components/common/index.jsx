import React, {Component} from 'react';
import Nav from './nav.jsx';
import Footer from './footer.jsx';
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