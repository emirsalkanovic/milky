import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({text}) => <div style={{color: 'red'}}>{text}</div>;

export default class GoogleMapsSen extends Component{
	static defaultProps = {
		center :{
			lat: 43.858341, 
			lng: 18.418475
		},
		zoom: 16
	};
	render(){
		return(
			<div id="map" style={{height:'30vh', width: '40vh'}}>
				<GoogleMapReact
				bootstrapURLKeys={{key: 'AIzaSyBJi0wG3m5CezozeWb0Vryk4JaLjjGegVg'}}
				defaultCenter={this.props.center}
				defaultZoom={this.props.zoom}>
				<Marker
				lat={43.858201}
				lng={18.419183}
				text={"MILKY"}
				/>
				</GoogleMapReact>
			</div>
			);
	}
}
