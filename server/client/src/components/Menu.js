import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';
import SlatkiMenu from './SlatkiMenu';
import SlaniMenu from './SlaniMenu';


export default class Menu extends Component{
	render(){
		return(
			<div id="menu">

			<SlatkiMenu />
			<SlaniMenu />
			 
			</div>
			);
	}
}