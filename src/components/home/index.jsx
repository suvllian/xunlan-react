import React, {Component} from 'react';
import {Link} from 'react-router';
import Slider from './slider.jsx';
import News from './news.jsx';
import Connect from './connect.jsx';
import Friend from './friend.jsx';
import Hot from './hot.jsx';

require('./index.scss');

const sliderImage = [
  {imageSrc: 'home-1.jpg'},
  {imageSrc: 'home-2.jpg'},
  {imageSrc: 'home-3.jpg'}
]

export default class Home extends Component{
	render() {
		return (
			<div>
				{ this.props.params.name }
				<Slider slider={sliderImage}/>
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