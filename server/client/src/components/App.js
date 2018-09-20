import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Menu from './Menu';
import Contacts from './Contacts';
const Dashboard = () => <h2>Dashboard</h2>

library.add(fab);

class App extends Component {
	componentDidMount () {
		this.props.fetchUser();
	}
	render () {
	return(
	<div className="container">
		<BrowserRouter>
			<div>
				<Header />
				<Route exact={true} path="/" component={Main} />
				<Route exact path="/menu" component={Menu} />
				<Route exact path="/contacts" component={Contacts} />
				<Route exact path="/surveys" component={Dashboard} />
				<Footer />
			</div>
		</BrowserRouter>
	</div>
	);
}
};

export default connect(null, actions) (App);