import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';
import GoogleMapsSCC from './GoogleMaps1';
import GoogleMapsSen from './GoogleMaps2';

export default class Contacts extends Component{
	render(){
		return(
			<div className="container" id="kontakt_">
				<h1>Kontakt</h1>
				<div className="row">

					<div className="col-12 col-md-6" id="senoina_kontakt">
					<h3>MILKY @Šenoina 8</h3>
					<h5>Radno Vrijeme:</h5>
					<p>od 08h do 23h</p>
					<h5>Telefon:</h5>
					<p>06033543737</p>
					<GoogleMapsSen />
					</div>

					<div className="col-12 col-md-6" id="scc_kontakt">
					<h3>MILKY @SCC Vrbanja 1</h3>
					<h5>Radno Vrijeme:</h5>
					<p>od 10h do 22h</p>
					<h5>Telefon:</h5>
					<p>0603569779</p>
					<GoogleMapsSCC />
					</div>
				</div>

			</div>
			);
	}
}