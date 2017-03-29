import React from 'react';
import Nav from './nav.js';
import Footer from './footer.js';
import { Link } from 'react-router';

export default class App extends React.Component{
	constructor(props) {
		super(props);
	}

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