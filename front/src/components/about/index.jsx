import React, {Component} from 'react';

import ImageBlock from './image.jsx';
import AboutHeader from './about-header.jsx';
import Organization from './organization.jsx';
import Department from './department.jsx';
import TimeLine from './timeline.jsx';

import api from './../../api'

require("./index.scss");

export default class About extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			currentIndex: 0, 
			timeLine: []
		}
	}

	render() {
		return (
			<div>
				<ImageBlock 
				    currentIndex={this.state.currentIndex} />
				<AboutHeader
				    currentIndex={this.state.currentIndex} 
				    setActive={this.setActive.bind(this)} />
				{this.renderContent()}
			</div>
		)
	}

	renderContent() {
		let { currentIndex, timeLine } = this.state;

		if (currentIndex == 0) {
			return <Organization />
		}

		if (currentIndex == 1) {
			return <Department />
		} 

		if (currentIndex == 2) {
			return <TimeLine timeline={timeLine}/>
		} 

		return <Organization />
	}

	setActive(index){
		this.setState({ currentIndex: index});
	}

	getAboutData() {
		api.getAboutData().then((data) => {
      let timeLineData = this.dealData(data);
			this.setState({ timeLine: timeLineData })
		});
	}

	dealData(data) {
		let yearArray = [], count = 0, length = 0;
    data.forEach((item, index) => {
      yearArray.includes(item.year) ? '' : yearArray.push(item.year)
    });
    length = yearArray.length;

    let timeLineArray = new Array(length).fill({});
    yearArray.forEach((item, index) => {
    	timeLineArray[index].year = item;
    	timeLineArray[index].staff = [];
    });

    for(let j = 0; j < length; j++) {
    	for (let i = 0, len = data.length; i < len; i++) {
    		if (data[i].year === timeLineArray[j].year) {
	    	  timeLineArray[j].staff.push(data[i].event);
	    	} else {
	    		j++;
	    	}
    	}
    	i++;
    }

    console.log(timeLineArray);
    return timeLineArray;
	}

	componentDidMount() {
		window.scrollTo(0,0);
		this.getAboutData();
	}
}