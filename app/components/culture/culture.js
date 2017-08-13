import React from 'react';

import SideNav from '../common/sidenav';
import style from './culture.scss';

class Culture extends React.Component {
	render() {
		return (
			<div id="main">
				<div id="culture">
					<SideNav />
					<div className="right-content">
						<div className="content-one content-section">
							<h2>文化综述</h2>
							<div className="culture-article">value</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Culture;