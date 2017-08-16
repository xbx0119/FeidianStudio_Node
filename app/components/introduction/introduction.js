import React from 'react';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import SideNav from '../common/sidenav';
import style from './introduction.scss';



class Studio extends React.Component {

	render() {
		return (
			<div className="content-one content-section">
				<h2>团队简介</h2>
				<p>沸点工作室是一支本科生IT人才孵化团队，以实际项目为驱动力，主攻web开发、移动手持设备软件开发(iOS/Android)以及信息安全。团队成立于2010年9月，其成员由华中农业大学在校本科生组成，现役成员来自信息、理学、工学、公管、植科、生科六院。工作室旨在提升团队成员面对新事物学习能力、动手实践能力、创新能力和团队协作精神。</p>
				{ /* <p>团队以本科生创新能力的早期培养为首要目标，强调“高尚的道德情操、优秀的工作作风和扎实的专业技能”并重。由导师全程负责、真实科研项目牵引、从本科低年级开始进行人才长线孵化，让学有余力的本科生直接参与面向学科前沿或生产实际的科研活动，通过“干中学”的方式培养学生的创新能力和综合素 质。在不断的探索实践中，该团队形成了“导师制”、“导生制”、“顾问制”结合的指导体系，建立了递进式的培养路线，积累了独具特色的团队文化。在学术梯队的逐级带领下，执行严格有序的培养制度，引入先进的项目管理规范，并创造亲和融洽的团队气氛，使学生们在动力和压力并存中迅速成长、成才、成功，使 导师的人才梯队具有延续性，同时努力与社会需求无缝衔接，大幅提高就业成功率。总之，该团队系统地提出并实践了“目标英才式、指导开放式、培养递进式、管理竞争式”的创新人才培养模式，实践了一种符合高等教育规律和社会需求的教育理念，希望努力搭建高等教育与社会需求之间的坚实桥梁，走出一条学生、家长、高校、社会都欢迎和支持的“四赢”之路，为高校本科人才培养提供一种新的范例。</p>
				<p>目前，Dian 团队在人才培养、教学创新、校企合作等方面取得了突出成绩， 受到学生和社会的一致好评，产生了广泛的影响力。</p> */ }
			</div>
		)
	}
}

class Teachers extends React.Component {

	render() {
		return (
			<div className="content-two content-section">
				<h2>导师团简介</h2>
				<ul>
					<li>
						<img src="/uploads/headimg/img>" />
						<span>
							<h2>name</h2>
							<h3>Tel：tel　　E-mail：email</h3>
							<h3>简介：</h3><p>introduction</p>
							<h3>寄语：</h3><p>word</p>
						</span>
					</li>
				</ul>
			</div>
		)
	}
}

class Groups extends React.Component {

	render() {
		return (
			<div className="content-section">
				<h2>分组简介</h2>
				<div className="group-content">
					<ul>
						<li>
							<span className="group-image"><img src="/uploads/system/img" /></span>
							<span className="group-message">
								<h2>name</h2>
								<p>分组简介：introduction</p>
								<p>关键词：keyword</p>
								<p>现任组长及联系方式：leader</p>
							</span>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}



class Introduction extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let sideLinks = [
			{link: "studio", name: "团队简介"},
			{link: "teachers", name: "导师简介"},
			{link: "groups", name: "分组简介"}
		];
		return (
			<div id="main">
				<div id="introduction">
					<SideNav match={this.props.match} links={sideLinks}  />
					<div className="right-content">
						<Switch>
							<Route path={`${this.props.match.url}/studio`} component={Studio} />
							<Route path={`${this.props.match.url}/teachers`} component={Teachers} />
							<Route path={`${this.props.match.url}/groups`} component={Groups} />
							<Route exact path={this.props.match.url} component={Studio} />

						</Switch>
					</div>
				</div>	
			</div>
		)
	}
};

export default Introduction;