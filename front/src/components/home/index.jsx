import React, {Component} from 'react';
import {Link} from 'react-router';
import Slider from './slider.jsx';
import News from './news.jsx';
import Connect from './connect.jsx';
import Friend from './friend.jsx';
import Hot from './hot.jsx';

import api from './../../api'

require('./index.scss');

export default class Home extends Component{
	constructor(props) {
		super(props);
	  
	  this.state = {
	  	sliderImage: [],
	  	hotImage: [],
	  	friendLink: []
	  }	
	}


	render() {
		const { sliderImage, hotImage, friendLink } = this.state;
		return (
			<div>
				<Slider slider={sliderImage}/>
				<News />
				<Hot hot={hotImage}/>
				<Connect />
				<Friend friends={friendLink}/>
			</div>
		)
	}

	getIndexBanner() {
		api.getIndexBanner().then((data) => {
			this.setState({ sliderImage: data })
		})

		api.getNewsBanner().then((data) => {
			this.setState({ hotImage: data })
		})

		api.getFriendLink().then((data) => {
			this.setState({ friendLink: data })
		})
	}

	componentDidMount() {
		window.scrollTo(0,0);
		this.getIndexBanner();
		
	}
}