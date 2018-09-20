import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class SlatkiMenu extends Component{
	render(){
		return(
			<div className="container">
			  <h1>#MILKY MENU</h1>
				<h3>Osonova:</h3>
			  <div className="row">
			    
			    <div className="col-sm">
			      <p><strong>Palačinak</strong></p>
			    </div>
			    <div className="col-sm">
			      <p><strong>Čoko Palačinak</strong></p>
			    </div>
			    <div className="col-sm">
			      <p><strong>Proteinski Palačinak</strong></p>
			    </div>
			    <div className="col-sm">
			      <p><strong>Bezglutenski Palačinak</strong></p>
			    </div>			    
			  </div>

				
				<h3>Slatki</h3>
			  <div className="row">
				
				<div className="col-12 col-md-6">
				  <h4>Namazi</h4>
				    <ul>
				    <li>Čokolada</li>
				    <li>Nutella</li> 
				    <li>Linolada bijela</li>
				    <li>Linolada crna</li>
				    <li>Puding(čokolada)</li>
				    <li>Vanilija</li>
				    <li>Med</li>
				    <li>Marmelada</li>
				    <li>Maslac od kikirikija</li>
				    <li>Nadjev od višnje</li>
				    <li>Dukatos</li>
				    <li>Čokolada sa mentolom</li>
				    <li>Cheesecake</li>
				    <li>Nadjev malina</li>
				    <li>Nadjev jagoda</li>
				    <li>Nadjev jabuka</li>
				    </ul>
				</div>
				<div className="col-12 col-md-6">
				  <h4>Premium</h4>
				    <ul>
				    <li>Čokoladni</li>
				    <li>Oreo namaz</li> 
				    <li>Premium čokolada</li>
				    <li>Premium bijela čokolada</li>
				    <li>Ferrero Rocher homemade</li>
				    <li>Bonne Manam dzem</li>
				    <li>Nadjev karamela</li>
				    <li>Nadjev Raffaello</li>
				    <li>Premium preljevi </li>
				    <li>ala Kinder Bueno</li>
				    <li>Baileys</li>
				    </ul>				  
				</div>
				<div className="col-12 col-md-6">
				  <h4>Orašasti plodovi</h4>
					 <ul>
					 <li>Orah</li>
					 <li>Kokos</li>
					 <li>Lješnjak</li>
					 <li>Badem</li>
					 <li>Mak</li>
					 <li>Cimet</li>
					 <li>Kikiriki</li>
					 </ul>			  
				</div>
				<div className="col-12 col-md-6">
				  <h4>Ostalo</h4>
				     <ul>
				     <li>Sladoled</li>
				     <li>Šlag</li>
				     <li>Rum</li>
				     <li>Čoko pahuljice</li>
				     <li>Šećer</li>
				     <li>Nesquick</li>
				     <li>Čokoladne mrvice bijele</li>
				     <li>Čokoladne mrvice crne</li>
				     <li>Mousse od bijele ili crne čokolade</li> 
				     <li>Banane </li>
				     <li>Šumsko Voće</li>
				     </ul>				  
				</div>
				<div className="col-12 col-md-6">
				  <h4>Keksi</h4>
					 <ul>
					 <li>Tufku</li>
					 <li>Jaffa</li>
					 <li>Cookies</li>
					 <li>Pettit Beure</li>
					 <li>Oreo</li>
					 </ul>				  
				</div>
				<div className="col-12 col-md-6">
				  <h4>Čokoladice</h4>
					 <ul>
					 <li>Milky Way</li>
					 <li>Kinder Bueno</li>
					 <li>Čoko bomboni</li>
					 <li>Kit Kat</li>
					 <li>Brownies</li>
					 </ul>				  
				</div>
								
			  </div>
			</div>
			);
	}
}