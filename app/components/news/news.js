import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


import SideNav from '../common/sidenav';
import style from './news.scss';


class Announce extends React.Component {
	render() {
		return (
			<div className="content-one content-section">
				<h2>新闻公告</h2>
				<div className="news-list">
						<a href="/news/detail/<%=announce[i]._id%>"><li><p>title</p><font>time</font></li></a>
				</div>
				<div className="news-page">
					12345
				</div>
			</div>
		)
	}
}

class Diary extends React.Component {
	render() {
		return (
			<div className="content-two content-section">
				<h2>成员日志</h2>
				<div className="news-list">
					<a href="/news/detail/id"><li><p>title</p><font>author / time</font></li></a>
				</div>
				<div className="news-page">
					12345
				</div>
			</div>
		)
	}
}

class News extends React.Component {
	render() {
		let sideLinks = [
			{link: "announce", name: "新闻公告"},
			{link: "diary", name: "成员日记"},
		];

		return (
			<div id="main">
				<div id="news">
					<SideNav match={this.props.match} links={sideLinks}  />
					<div className="right-content">
						<Switch>
							<Route path={`${this.props.match.url}/announce`} component={Announce} />
							<Route path={`${this.props.match.url}/diary`} component={Diary} />
							<Route exact path={this.props.match.url} component={Announce} />
						</Switch>
					</div>
				</div>
			</div>
		)
	}
}

export default News;