import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.scss'

class Index extends React.Component {
	render() {
		return (
			<div id="main" className="index">
				<div id="focus">
					<div className="focus-block">
		                <img src={require('./resource/focus1.jpg')} className="focus-img" />
					</div>
		            <div className="focus-all-images">
		                <img src={require('./resource/focus1.jpg')}className="focus-img" />
		                <img src={require('./resource/focus2.jpg')}className="focus-img" />
		                <img src={require('./resource/focus3.jpg')}className="focus-img" />
		                <img src={require('./resource/focus4.jpg')}className="focus-img" />
		                <img src={require('./resource/focus5.jpg')}className="focus-img" />
		                <img src={require('./resource/focus6.jpg')}className="focus-img" />
		                <img src={require('./resource/focus7.jpg')}className="focus-img" />
		                <img src={require('./resource/focus8.jpg')}className="focus-img" />
		                <img src={require('./resource/focus9.jpg')}className="focus-img" />
		                <img src={require('./resource/focus10.jpg')}className="focus-img" />
		            </div>
		            <div className="focus-console">
		                <span className="left"><img src={require('./resource/left.png')}/></span>
		                <span className="right"><img src={require('./resource/right.png')}/></span>
		            </div>
		            <div className="focus-thumbnail">
		                <div className="focus-thumbnail-div">
		                    <span className="current">1</span>
		                    <span>2</span>
		                    <span>3</span>
		                    <span>4</span>
		                    <span>5</span>
		                    <span>6</span>
		                    <span>7</span>
		                    <span>8</span>
		                    <span>9</span>
		                    <span>10</span>
		                </div>
		            </div>
				</div>
		        { /* 简介 */ }
		        <div className="introduction">
		          <div className="block-header">
		            <h2 className="title">INTRODUCTION</h2>
		            <p className="title-description">OUR BRIEF INTRODUCTION</p>
		          </div>  
		          <div className="block-content">
		            <p>沸点工作室是一支本科生IT人才孵化团队，以实际项目为驱动力，主攻web开发、移动手持设备软件开发(iOS/Android)以及信息安全。团队成立于2010年9月，其成员由华中农业大学在校本科生组成，现役成员来自信息、理学、工学、公管、植科、生科六院。工作室旨在提升团队成员面对新事物学习能力、动手实践能力、创新能力和团队协作精神。</p>
		          </div>
		        </div>
		        {/* 文化 */}
		        <div className="culture">
		            <div className="block-header">
		                <h2 className="title">CULTURE</h2>
		                <p className="title-description">OUR CULTURE AND BLIEF</p>
		            </div>
		            <div className="block-content">
		                <h2>沸腾的心，飞扬的梦；点滴积累，共码未来</h2>
		                <h3>Write the Code, Change the world</h3>
		            </div>
		        </div>
				{/*工作室分组*/}
		        <div className="group">
		        	<div className="block-header">
		        		<h2 className="title">GROUPS</h2>
		        		<p className="title-description">OUR STUDY DIRECTION</p>
		        	</div>
		        	<div className="block-content">
		        		<div><span><img src={require('./resource/group1.png')}/></span><p>Web开发</p></div>
		        		<div><span><img src={require('./resource/group2.png')}/></span><p>Android/Java开发</p></div>
		        		<div><span><img src={require('./resource/group3.png')}/></span><p>iOS开发</p></div>
		        		<div><span><img src={require('./resource/group4.png')}/></span><p>信息安全</p></div>
		        		<div><span><img src={require('./resource/group5.png')}/></span><p>UI设计</p></div>
		        	</div>
		        </div>
		        { /*新闻动态*/}
		        <div className="news">
		        	<div className="block-header">
		        		<h2 className="title">NEWS</h2>
		        		<p className="title-description">OUR RECENTLY INFORMATION</p>
		        	</div>
		          <div className="block-content">
		            <div className="left news-list">
		              <ul>
		                <li><a href="/news/detail/_id"><b>【新闻公告】</b>沸点工作室2016年暑期培训于8月5日正式开始</a><font>time</font></li>
		                <li><a href="/news/detail/_id"><b>【新闻公告】</b>沸点工作室2016年暑期培训于8月5日正式开始</a><font>time</font></li>
		                <li><a href="/news/detail/_id"><b>【新闻公告】</b>沸点工作室2016年暑期培训于8月5日正式开始</a><font>time</font></li>
		                <li><a href="/news/detail/_id"><b>【新闻公告】</b>沸点工作室2016年暑期培训于8月5日正式开始</a><font>time</font></li>
		                <li><a href="/news/detail/_id"><b>【新闻公告】</b>沸点工作室2016年暑期培训于8月5日正式开始</a><font>time</font></li>
		              </ul>
		            </div>
		            <div className="right news-list">
		              <ul>
		                    <li><a href="/news/detail/<%=announce[i]._id%>"><b>【成员日志】</b>2016年暑期集训总结</a><font>time</font></li>
		                    <li><a href="/news/detail/<%=announce[i]._id%>"><b>【成员日志】</b>2016年暑期集训总结</a><font>time</font></li>
		                    <li><a href="/news/detail/<%=announce[i]._id%>"><b>【成员日志】</b>2016年暑期集训总结</a><font>time</font></li>
		                    <li><a href="/news/detail/<%=announce[i]._id%>"><b>【成员日志】</b>2016年暑期集训总结</a><font>time</font></li>
		                    <li><a href="/news/detail/<%=announce[i]._id%>"><b>【成员日志】</b>2016年暑期集训总结</a><font>time</font></li>
		              </ul>
		            </div>
		          </div>
		        </div>
		        {/* 联系*/}
		        {/* <div className="contact">
		            <div className="block-header">
		                <h2 className="title">CONTACT</h2>
		                <p className="title-description">HOW TO CONTACT US</p>
		            </div>
		            <div className="contact-block">
		                
		            </div>
		        </div> */}
		        {/*友情链接 */}
		        <div className="links">
		        	<div className="block-header">
		        		<h2 className="title">LINKS</h2>
		        		<p className="title-description">OUR FRIENDLY LINKS</p>
		        	</div>
		        	<div className="block-content">
		                <a href="javascript:;"><img src={require('./resource/feidian.jpg')}/></a>
		                <a href="javascript:;"><img src={require('./resource/library.jpg')}/></a>
		                <a href="https://github.com/"><img src={require('./resource/github.jpg')}/></a>
		                <a href="http://www.csdn.net/"><img src={require('./resource/csdn.jpg')}/></a>
		                <a href="https://www.xctf.org.cn/"><img src={require('./resource/xctf.jpg')}/></a>
		                <a href="javascript:;"><img src={require('./resource/null.jpg')}/></a>
		        	</div>
		        </div>
			</div>
		)
	}
};

export default Index;