import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../img/milky2.jpg';



class Header extends Component{
      renderContent(){
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li className="nav-item"><a className="nav-link" href="/auth/google">Login with Google</a></li>;
      default:
        return <li className="nav-item"><a className="nav-link" href="/api/logout">Logout</a></li>;
            }
  }

		render(){
				return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-custom">
        <a className="navbar-brand" href="/"><img src={logo} alt={logo} style={{width: 50, height: 50}}></img></a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>    
        <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav">
           <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
           </li>
           <li className="nav-item">
            <a className="nav-link" href="/menu">Menu</a>
           </li>
           <li className="nav-item">
            <a className="nav-link" href="/contacts">Kontakt</a>
           </li>
           <li className="nav-item">
            {this.renderContent()}
           </li>
         </ul>
        </div>
      </nav>



        //    <Navbar inverse collapseOnSelect>
  			//			<Navbar.Header>
  			//			  <Navbar.Brand>
  			//			    <a href="/"><img src={logo} alt={logo} style={{width: 50, height: 50}} /></a>
  			//			  </Navbar.Brand>
  			//			  <Navbar.Toggle />
  			//			</Navbar.Header>
  			//			<Navbar.Collapse>
  			//			  <Nav>
  			//			    <NavItem eventKey={1} href="/">
  			//			      Home
  			//			    </NavItem>
  			//			    <NavItem eventKey={2} href="/menu">
  			//			      Menu
  			//			    </NavItem>
  			//			    <NavItem eventKey={3} href="/contacts">
  			//			      Kontakt
  			//			    </NavItem>
        //          <Nav pullRight>
        //          <li>
        //              {this.renderContent()}
        //          </li>
        //          </Nav>
	  		//			   </Nav>
	  		//			</Navbar.Collapse>
	  		//			</Navbar>
				);
		}
	}

  function mapStateToProps({ auth }){
  return { auth };
};

export default connect(mapStateToProps) (Header);