import React from 'react';

import style from './sidenav.scss';

class SideNav extends React.Component {

	render() {
		return (
			<div className="left-nav">
				<h2>沸点简介</h2>
				<ul id="left-nav-ul">
					<a href="/introduction"><li className="current">团队简介</li></a>
					<a href="/introduction/teacher"><li>导师团简介</li></a>
					<a href="/introduction/group"><li>分组简介</li></a>
				</ul>
			</div>
		)
	}
}

export default SideNav;