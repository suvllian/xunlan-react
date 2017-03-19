import React from 'react';
import Nav from './nav.js';


export default class App extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Nav></Nav>

			</div>
		)
	}
}