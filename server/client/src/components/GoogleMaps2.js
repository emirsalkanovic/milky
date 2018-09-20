import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({text}) => <div style={{color: 'red'}}>{text}</div>;

export default class GoogleMapsScc extends Component{
	static defaultProps = {
		center :{
			lat: 43.855246, 
			lng: 18.407746 
		},
		zoom: 16
	};
	render(){
		return(
			<div id="map2" style={{height:'30vh', width: '40vh'}}>
				<GoogleMapReact
				bootstrapURLKeys={{key: 'AIzaSyBJi0wG3m5CezozeWb0Vryk4JaLjjGegVg'}}
				defaultCenter={this.props.center}
				defaultZoom={this.props.zoom}>
				<Marker
				lat={43.855246}
				lng={18.407746}
				text={"MILKY(SCC)"}
				/>
				</GoogleMapReact>
			</div>
			);
	}
}