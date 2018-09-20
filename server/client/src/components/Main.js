
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Glyphicon  } from 'react-bootstrap';


import GoogleMapsSCC from './GoogleMaps1';
import GoogleMapsSen from './GoogleMaps2';
import Gallery from './Gallery';
import slika from '../img/milky1.jpg';

export default class Index extends Component{
	render(){
		return(
			<div id="main">
			
			<Jumbotron id="jumbotron">
			<h1>#MILKY palačinkarnica</h1>
			<p>Bezglutenske, proteinske, čokoladne palačinke sa više od 50 različitih dodataka.</p>
			<Link to="./menu" className="btn btn-lg btn-primary">MENU</Link>
			<Gallery />
			</Jumbotron>
			<div id="container_loc">
			<img id="slika1" src={slika} />
			<Row id="lokacija_header">
			<h1 id="naslov">NA DVIJE LOKACIJE U GRADU</h1>
			</Row>
			<div className="container">
			  <div className="row">
				<div className="col-12 col-md-6" id="lokacija_senoina">
				  <Glyphicon glyph="map-marker" />
			      <h4>MILKY</h4>
			      <hr />
			      <GoogleMapsSen />
			      <p><strong>ul. Šenoina 8</strong></p>
			      <p>Radno vrijeme:
			       od 08 do 23h</p>
				</div>

				<div className="col-12 col-md-6" id="lokacija_scc">
				  <Glyphicon glyph="map-marker" />
			      <h4>MILKY SCC</h4>
			      <hr />
			      <GoogleMapsSCC />
			      <p><strong>ul. Vrbanja 1</strong></p>
			      <p>Radno vrijeme:
			       od 10h do 22h</p>
				</div>
			  </div>
			</div>
			</div>
			</div>
			);
	}
}