import React, {Component} from 'react';
import {Link} from 'react-router';
import Top from './top.jsx';
import News from './news.jsx';
import Connect from './connect.jsx';
import Friend from './friend.jsx';

export default class Home extends Component{
	render() {
		return (
			<div>
				{ this.props.params.name }
				<Top />
				<News />
				<Connect />
				<Friend />
			</div>
		)
	}
}