import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Footer extends Component{
	render(){
		return(
            <div className="container" id="footer">
                <div className="row">
                    <div className="col-sm-6">
                        <a href="https://www.facebook.com/Milky.Sarajevo/"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" /></a>
                    </div>
                    <div className="col-sm-6">
                        <a href="https://www.instagram.com/milkysarajevo/"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></a>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">
                        &copy; {(new Date().getFullYear())} Copyright: <Link to="/"> MILKY </Link>
                </div>

            </div>
			);
	}
}