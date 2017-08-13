import React from 'react';

import SideNav from '../common/sidenav';
import style from './products.scss';

class Products extends React.Component {
	render() {
		return (
			<div id="main">
				<div id="products">
					<h2>作品展示</h2>
						<div className="products-block">
							<a href="">
								<div className="face">
									<img src="" />
									<span className="title">title</span>
								</div>
								<div className="mask">
									<span>项目时间：time</span>
									<span>项目人员：author</span>
									<span>项目简介：introduction</span>
								</div>
							</a>
						</div>
				</div>
			</div>
		)
	}
}

export default Products;