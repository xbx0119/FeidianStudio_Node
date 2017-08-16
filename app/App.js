import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
// import createBrowserHistory from 'history/createBrowserHistory'
// let history = createBrowserHistory();


import Header from './components/common/header';
import Footer from './components/common/footer';

import Index from './components/index/index';
import Introduction from './components/introduction/introduction';
import Members from './components/members/members';
import News from './components/news/news';
import Products from './components/products/products';
import Recruit from './components/recruit/recruit';
import Contact from './components/contact/contact';



class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div id="root">
					<Header />
					<Switch>
						<Route exact path="/" component={Index} />
						<Route path="/introduction" component={Introduction} />
						<Route path="/members" component={Members} />
						<Route path="/news" component={News} />
						<Route path="/products" component={Products} />
						<Route path="/recruit" component={Recruit} />
						<Route path="/contact" component={Contact} />
						<Route path="*" component={Index} />
					</Switch>
					<Footer />	
				</div>
			</BrowserRouter>
		)
	}
};

ReactDOM.render(
	<App />,
	document.getElementById("wrapper")
)