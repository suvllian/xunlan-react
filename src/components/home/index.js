import React from 'react';
import Nav from './nav.js';
import Top from './top.js';
import Connect from './connect.js';
import Footer from './footer.js';

export default class App extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Nav />
				<Top />
				<Connect />
				<Footer />
			</div>
		)
	}
}