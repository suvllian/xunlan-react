import React, {Component} from 'react';
import Daily from './daily.jsx';
import Product from './product.jsx';


export default class Techonlogy extends Component {
	render() {
		return (
			<div>
				<Daily />
				<Product />
			</div>
		)
	}
}