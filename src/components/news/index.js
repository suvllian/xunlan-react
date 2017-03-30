import React, {Component} from 'react';
import {Link} from 'react-router';

import Daily from './daily.js';
import Achieve from './achieve.js';

export default class News extends Component {
	render() {
		return (
			<div>
				<Daily />
				<Achieve />
			</div>
		)
	}

}