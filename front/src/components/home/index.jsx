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
	  	friendLink: [],
	  	newsList: []
	  }	
	}


	render() {
		const { sliderImage, hotImage, friendLink, newsList } = this.state;
		return (
			<div>
				<Slider slider={sliderImage}/>
				<News news={newsList}/>
				<Hot hot={hotImage}/>
				<Connect />
				<Friend friends={friendLink}/>
			</div>
		)
	}

	getIndexData() {
		api.getIndexData().then((data) => {
			this.setState({ sliderImage: data.banner });
			this.setState({ hotImage: data.hot });
			this.setState({ friendLink: data.friend });
			this.setState({ newsList: data.news });
		})
	}

	componentDidMount() {
		window.scrollTo(0,0);
		this.getIndexData();
	}
}