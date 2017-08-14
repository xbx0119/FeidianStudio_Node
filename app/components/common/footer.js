import React from 'react';
import { Link } from 'react-router-dom'


class Footer extends React.Component {
	render() {
		return (
			<div id="footer">
				<p>Copyright © 2016 沸点工作室 All rights reserved.</p>
				{ /*<a href="#header" className="backtotop">Back To Top</a> */ }
			</div>
		);
	}
};

export default Footer;