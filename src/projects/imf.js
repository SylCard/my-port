import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProjectNav from './ProjectNav.js';
import '../App.css';
import '../Responsive.css';
import '../Hamburgers.css';
import img01 from '../img/prismvideo-img01.png';
import img00 from '../img/hand.png';
import img03 from '../img/prismvideo-img03.png';
import img04 from '../img/prismvideo-img04.png';
import img05 from '../img/prismvideo-img05.png';
import img06 from '../img/prismvideo-img06.png';
import img07 from '../img/prismvideo-img07.png';
import img08 from '../img/prismvideo-img08.png';
import img09 from '../img/prismvideo-img09.png';
import imf from '../img/imf.png';
class InMyFeels extends Component {
  state = {
    logoImage: img00
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content">
        <div className="cover">
          <ProjectNav
            logoColor="black"
            menuColor="black"
            logo={this.state.logoImage}
            title={["In My Feelings"]}
            domain="App"
            roles=""
            rolesTwo=""
            date="2019"
            firm=""
          />
        </div>
        <div className="summary">
          <div className="summary-container">
            <div className="summary-container-left">
              <div className="content-title black">Summary</div>
              <div className="content end black">
              In My Feelings is a mood prediction app that uses musical data and Machine Learning to infer your current mood.
              It relies on clustering and supervised learning to predict the position of a song among other mood clusters.

              <br/> <br/>

              </div>
            </div>
            <div className="summary-container-right">
              <div className="content-title black"><a href="https://sylcard.github.io/InMyFeels-/" className="demo">Live demo</a></div>
              <div className="content end black">
                <img src={imf} className="image end" />
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default InMyFeels;
