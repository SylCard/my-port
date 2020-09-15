import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import profile from "./img/pp2.jpg";
import link from "./img/link-icon.svg"

class About extends Component {
  state = {
    hamburgerState: "off",
    link: link
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleMenu = () => {
    let hamburger = document.querySelector(".hamburger");
    let overlay = document.querySelector(".overlay");
    if (this.state.hamburgerState === "off") {
      hamburger.classList.add("is-active");
      overlay.classList.remove("hide");
      overlay.classList.add("show");
      this.setState({hamburgerState: "on"})
    } else {
      hamburger.classList.remove("is-active");
      overlay.classList.remove("show");
      overlay.classList.add("hide");
      this.setState({hamburgerState: "off"})
    }
  }

  render() {
    return (
      <div className="body">
        <section className="header">
          <div className="navigation">
            <div className="anne"><Link to="/" className="active">Sylvester Cardorelle</Link></div>
            <button className="hamburger hamburger--spin mobile" type="button" onClick={this.toggleMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="overlay mobile">
              <div className="submenus">
                <div className="about-mobile"><Link to="/about" className="active">About</Link></div>
                <div className="work-mobile"><Link to="/">Work</Link></div>
                <div className="articles-mobile"><a href="mailto:sylvester@cardorelle.io">Contact</a></div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="about"><Link to="/about" className="active">About</Link></div>
              <div className="work"><Link to="/">Work</Link></div>
              <div className="articles"><a href="mailto:sylvester@cardorelle.io">Contact</a></div>
            </div>
          </div>
          <div className="designer">
            Full-Stack Engineer
          </div>
          <div className="speciality">
            Full-Time Listener
          </div>
        </section>
        <section className="about">
          <img src={profile} alt="Profile" className="about-image"/>
            {window.innerWidth<=1009 ?
              <div className="about-content">
                <div>
                  Hi, my name is Sylvester.<br/><br/>
                  I am a Software Engineer at J.P. Morgan passionate about using technology to create novel experiences. I graduated in Computer Science from the University of Warwick in 2018.<br/><br/><br/>
                </div>
                <div data-aos="fade-up">
                  <span className="about-title">Some things I like:</span><br/><br/>
                  Wing Chun Kung Fu<br/><br/>
                  Electric Guitar<br/><br/>
                  Japanese Manga<br/><br/>
                </div>
              </div> :
              <div className="about-content">
                <div>
                  Hi, my name is Sylvester.<br/><br/>
                  I am a Software Engineer at J.P. Morgan passionate about using technology to create novel experiences. I graduated in Computer Science from the University of Warwick in 2018.<br/><br/><br/>
                </div>
                <div data-aos="">
                  <span className="about-title">Some things I like:</span><br/><br/>
                  Wing Chun Kung Fu<br/><br/>
                  Electric Guitar<br/><br/>
                  Japanese Manga<br/><br/>
                </div>
              </div>
            }
        </section>
        <div className="about-resume">
          <a href="mailto:sylvester@cardorelle.io" target="_blank" rel="noopener noreferrer" className="about-download-button">Contact Me</a>
        </div>
      </div>
    );
  }
}

export default About;
