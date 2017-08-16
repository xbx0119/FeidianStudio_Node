import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


import SideNav from '../common/sidenav';
import style from './recruit.scss';


class Detail extends React.Component {
	render() {
		return (
			<div className="content-one content-section">
				<h2>招新详情</h2>
				<div className="recruit-content">
					<span><font>招新简介</font><p>des</p></span>
					<span><font>招新对象</font><p>obj</p></span>
					<span><font>招新时间</font><p>time</p></span>
					<span><font>招新日程</font><p>schedule</p></span>
					<span><font>注意事项</font><p>notice</p></span>
					<span><font>招新qq群</font><p>qq</p></span>
					<span><font>二维码</font><p>img</p></span>
					<span><font>联系方式</font><p>tel</p></span>
				</div>
			</div>
		)
	}
}

class Signup extends React.Component {
	render() {
		return (
			<div className="content-two content-section">
				<h2>报名表</h2>
			</div>
		)
	}
}


class Recruit extends React.Component {
	render() {
		let sideLinks = [
			{link: "detail", name: "招新详情"},
			{link: "signup", name: "在线报名"}
		];

		return (
			<div id="main">
				<div id="recruit">
					<SideNav match={this.props.match} links={sideLinks} />
					<div className="right-content">
						<Switch>
							<Route path={`${this.props.match.url}/detail`} component={Detail} />
							<Route path={`${this.props.match.url}/signup`} component={Signup} />
							<Route exact path={this.props.match.url} component={Detail} />
						</Switch>
					</div>
				</div>
			</div>
		)
	}
}

export default Recruit;