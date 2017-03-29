import React from 'react';
import Top from './top.js';
import News from './news.js';
import Connect from './connect.js';
import Friend from './friend.js';

export default class Home extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Top />
				<News />
				<Connect />
				<Friend />
			</div>
		)
	}
}