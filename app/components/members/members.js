import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import SideNav from '../common/sidenav';
import style from './members.scss';


class GradePart extends React.Component {
	render() {
		return (
			<div className="members-content">
				<div id="14" className="year-section">
					<div className="person">
						<div className="person-img">
							<img src="" />
						</div>
						<div className="person-info">
							<p><font>编号：</font>1</p>
							<p><font>方向：</font>1</p>
							<p><font>E-mail：</font>1</p>
							<p><font>最喜欢的话：</font>1</p>
							<p><font>简介：</font>1</p>
						</div>
						<div className="person-name">111</div>
					</div>
				</div>
			</div>
		)
	}
}


class Members extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let sideLinks = [
			{link: "14", name: "14级"},
			{link: "15", name: "15级"},
			{link: "16", name: "16级"}
		];

		return (
			<div id="main">
				<div id="members">
					<SideNav match={this.props.match} links={sideLinks} />
					<div className="right-content">
						<Switch>
							<Route path={`${this.props.match.url}/14`} component={GradePart} />
							<Route path={`${this.props.match.url}/15`} component={GradePart} />
							<Route path={`${this.props.match.url}/16`} component={GradePart} />
							<Route exact path={this.props.match.url} component={GradePart} />

						</Switch>
					</div>
				</div>
			</div>
		)
	}
}

export default Members;