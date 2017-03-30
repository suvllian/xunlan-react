import React, {Component} from 'react';
import {Link} from 'react-router';
import Top from './top.js';
import News from './news.js';
import Connect from './connect.js';
import Friend from './friend.js';
import Daily from './../news/daily.js';
import Achieve from './../news/achieve.js';
import Welfare from './../news/welfare.js';
import Face from './../news/face.js';

export default class Home extends Component{
	render() {
		return (
			<div>
				<Daily />
				<Achieve />
				<Welfare />
				<Face />
				<Top />
				<News />
				<Connect />
				<Friend />
			</div>
		)
	}
}