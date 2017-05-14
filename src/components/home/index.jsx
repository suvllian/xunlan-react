import React, {Component} from 'react';
import {Link} from 'react-router';
import Top from './top.jsx';
import News from './news.jsx';
import Connect from './connect.jsx';
import Friend from './friend.jsx';
import Hot from './hot.jsx';

require('./index.scss');

export default class Home extends Component{
	render() {
		return (
			<div>
				{ this.props.params.name }
				<Top />
				<News />
				<Hot />
				<Connect />
				<Friend />
			</div>
		)
	}

	componentDidMount() {
		window.scrollTo(0,0);
	}
}