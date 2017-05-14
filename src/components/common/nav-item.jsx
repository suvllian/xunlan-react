import React, {Component} from 'react';
import { Link } from 'react-router';

export default class NavItem extends Component {
	render() {
		return (
			<ul className="nav-ul">
			{
				this.props.items.map((item, index) => {
					let classes = (item.title == this.props.currentItem) ? 'active' : '';
					return (<li key={index} className={classes} onClick={this.changeActiveItem.bind(this, item.title)}>
						<Link to={item.link}>{item.title}</Link>
					</li>)
				})
			}
			</ul>						
		)
	}

	changeActiveItem(item) {
		this.props.changeActive(item);
	}
}