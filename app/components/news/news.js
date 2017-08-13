import React from 'react';

import SideNav from '../common/sidenav';
import style from './news.scss';

class News extends React.Component {
	render() {
		return (
			<div id="main">
				<div id="news">
					<SideNav />
					<div className="right-content">
						<div className="content-one content-section">
							<h2>新闻公告</h2>
							<div className="news-list">
									<a href="/news/detail/<%=announce[i]._id%>"><li><p>title</p><font>time</font></li></a>
							</div>
							<div className="news-page">
								12345
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default News;