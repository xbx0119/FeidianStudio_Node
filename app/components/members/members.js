import React from 'react';

import SideNav from '../common/sidenav';
import style from './members.scss';


class Members extends React.Component {
	render() {
		return (
			<div id="main">
				<div id="members">
					<div className="time-nav">
						<span><i></i><font><a href="#14">14级</a></font></span>
					</div>
					<div className="members-content">
						
							<div id="14" className="year-section">
								<h2>14级</h2>
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
				</div>
			</div>
		)
	}
}

export default Members;