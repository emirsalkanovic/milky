import React, { Component } from 'react';

export default class SlaniMenu extends Component{
	render(){
		return(
			<div className="container">
			<h3>Slani</h3>
			  <div className="row">
			  	<div className="col-12 col-md-6">
				  <h4>Meso</h4>
				    <ul>
				    <li>Piletina</li>
				    <li>Puretina</li>
				    <li>Hrenovka</li>
				    </ul>
			  	</div>
			  	<div className="col-12 col-md-6">
				  <h4>Odresci</h4>
				     <ul>
					 <li>Pureća šunka</li>
					 <li>Pršut</li>
					 </ul>
			  	</div>
			  	<div className="col-12 col-md-6">
				  <h4>Umaci</h4>
				    <ul>
			 		<li>Blagi</li>
			 		<li>Salsa ljuti</li>
			 		<li>BBQ ljuti</li>
			 		<li>Tabasco</li>
			 		<li>Umak od gljiva</li>
			 		<li>Tartar</li>
			 		<li>Majoneza</li>
			 		<li>Kečap</li>
			 		<li>Vrhnje</li>
			 		<li>Spicy cheese umak</li>
			 		<li>Bešamel umak</li>
			 		</ul>
			  	</div>
			  	<div className="col-12 col-md-6">
				  <h4>Drugi prilozi</h4>
				    <ul>
			 		<li>Francuska salata</li>
			 		<li>Jaje</li>
			 		<li>Krastavci</li>
			 		<li>Čili</li>
			 		<li>Meksički </li>
			 		<li>Svježe povrće</li>
			 		<li>Ajvar</li>
			 		</ul>
			  	</div>
			  	<div className="col-12 col-md-6">
				  <h4>Riba</h4>
				    <ul>
				    <li>Tunjevina</li>
				    </ul>
			  	</div>
			  	<div className="col-12 col-md-6">
				  <h4>Sir</h4>
				    <ul>
				    <li>Gauda</li>
				    <li>Mozzarela</li>
				    <li>Posni Sir</li>
				    <li>Topljeni Sir</li>
				    </ul>
			  	</div>
			  </div>
			</div>
			);
	}
}