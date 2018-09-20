import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import pal01 from '../img/pal01.jpg';
import pal02 from '../img/pal02.jpg';
import pal03 from '../img/pal03.jpg';
import pal04 from '../img/pal04.jpg';
import pal05 from '../img/pal05.jpg';
import pal06 from '../img/pal06.jpg';

const images = [
     pal01,                 //	'/src/img/pal01.jpg',
     pal02,                 //	'/src/img/pal02.jpg',
     pal03,                 //	'/src/img/pal03.jpg',
     pal04,                 //	'/src/img/pal04.jpg',
     pal05,                 //	'/src/img/pal05.jpg',
     pal06,                 //	'/src/img/pal06.jpg',
];

export default class Gallery extends Component{
	constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
	render(){
		const { photoIndex, isOpen } = this.state;
		return(
			<div  id="galrija">
        <button type="button" className="btn btn-lg btn-primary" onClick={() => this.setState({ isOpen: true })}>
          #MILKY palačinci
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
			);
	}
}
//<Lightbox 