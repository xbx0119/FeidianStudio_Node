import React from 'react';
import { Route, Link } from 'react-router-dom';
import style from './base.scss';

class Header extends React.Component {
	render() {
		return (
			<div id="header" name="header">
				<div id="logo">
			    <Link to="/"><img src={require('./resource/header.png')} /></Link>
			  </div>
				<div id="header-nav">
					<ul>
						<Link to="/"><li>首页</li></Link>
						<Link to="/introduction"><li>团队简介</li></Link>
						<Link to="/members"><li>历届成员</li></Link>
						<Link to="/news"><li>新闻动态</li></Link>
						<Link to="/products"><li>作品展示</li></Link>
						<Link to="/recruit"><li>团队招新</li></Link>
						<Link to="/contact"><li>联系我们</li></Link>
					</ul>
				</div>
			</div>
		)
	}
};

export default Header;