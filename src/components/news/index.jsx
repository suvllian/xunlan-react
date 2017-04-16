import React, {Component} from 'react';
import {Link} from 'react-router';

import Daily from './daily.jsx';
import Achieve from './achieve.jsx';
import Welfare from './welfare.jsx';
import Face from './face.jsx';

export default class News extends Component {
	render() {
		return (
			<div>
				<Daily />
				<Achieve />
				<Welfare />
				<Face />
			</div>
		)
	}

}