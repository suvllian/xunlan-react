import React, {Component} from 'react';

import Daily from './daily.jsx';
import Achieve from './achieve.jsx';
import Welfare from './welfare.jsx';
import Face from './face.jsx';

export default class News extends Component {
	render() {
		return (
			<div className="news-department">
				<Daily />
				<Achieve />
				<Welfare />
				<Face />
			</div>
		)
	}

}