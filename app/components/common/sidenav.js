import React from 'react';

import { Link } from 'react-router-dom'


import style from './sidenav.scss';

class SideNav extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {

	}

	render() {
		return (
			<div className="left-nav">
				<h2>沸点简介</h2>
				<ul id="left-nav-ul">
					{this.props.links.map(item => {
						return <Link key={item.link} to={`${this.props.match.url}/${item.link}`}><li className="current">{item.name}</li></Link>
					})}				
				</ul>
			</div>
		)
	}
}

export default SideNav;