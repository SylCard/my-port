import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import './Hamburgers.css';
import Project from './Project.js';
import projectone from './img/p1.jpg';
import projecttwo from './img/map.jpg';
import projectthree from './img/project3.jpg';
import projectfour from './img/project4.jpg';
import Article from './Article.js';

class Main extends Component {
  state = {
    projectOneImage: projectone,
    projectTwoImage: projecttwo,
    projectThreeImage: projectthree,
    projectFourImage: projectfour,
    hamburgerState: "off"
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
                <div className="about-mobile"><Link to="/about">About</Link></div>
                <div className="work-mobile"><Link to="/" className="active">Work</Link></div>
                <div className="articles-mobile"><a href="mailto:sylvester@cardorelle.io" target="_blank" rel="noopener noreferrer">Contact</a></div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="about"><Link to="/about">About</Link></div>
              <div className="work"><Link to="/" className="active">Work</Link></div>
              <div className="articles"><a href="mailto:sylvester@cardorelle.io" target="_blank" rel="noopener noreferrer">Contact</a></div>
            </div>
          </div>
          <div className="designer">
            Full-Stack Engineer
          </div>
          <div className="speciality">
            Full-Time Listener
          </div>
        </section>
        <section className="projects">
          {window.innerWidth<=1009 ?
            <div className="left">
              <p className="projects-intro">
                I enjoy finding peculiar<br/> solutions <span className="bold">to complex problems</span>.<br/> Above all else, I aspire <span className="bold">to build things that make people happy</span>.<br/>Or atleast go "wow, that's cool".
              </p>
              <Project
                aos=""
                image={this.state.projectOneImage}
                link="/imf"
                hmwClass="hmw"
                class="project-default"
                hmw={["A musical mood prediction App using Spotify data"]}
                color="rgba(11, 156, 150, 0.95)"
                title="In My Feelings"
                category="App"
                index="0"
              />
              <Project
                aos="fade-up"
                image={this.state.projectThreeImage}
                link=""
                hyper="https://medium.com/@silvercloud438/how-i-taught-a-neural-network-to-understand-similarities-in-music-audio-d4fca54c1aed"
                hmwClass="hmw hmw-exception"
                class="project-last"
                hmw={["How can we recommend music using Deep Learning?"]}
                color="rgba(233, 111, 94, 0.95)"
                title="Deep Content Music Recommendation"
                category="Research"
                index="1"
              />
            </div> :
            <div className="left">
              <p className="projects-intro">
                I enjoy finding peculiar<br/> solutions <span className="bold">to complex problems</span>. <br/> Above all else, I aspire <span className="bold">to build things that make people happy</span>.<br/>Or atleast go "wow, that's cool".
              </p>
              <Project
                aos=""
                image={this.state.projectTwoImage}
                link=""
                hyper="https://sylcard.github.io/covidMap/"
                hmwClass="hmw"
                class="project-default"
                hmw={["How is our planet doing?"]}
                color="rgba(11, 156, 150, 0.95)"
                title="COVID-19 Map"
                category="App"
                index="0"
              />
              <Project
                aos="fade-up"
                image={this.state.projectThreeImage}
                link=""
                hyper="https://medium.com/@silvercloud438/how-i-taught-a-neural-network-to-understand-similarities-in-music-audio-d4fca54c1aed"
                hmwClass="hmw hmw-exception"
                class="project-last"
                hmw={["How can we recommend music using Deep Learning?"]}
                color="rgba(233, 111, 94, 0.95)"
                title="Deep Content Music Recommendation"
                category="Research"
                index="1"
              />
            </div>
          }
          {window.innerWidth<=1009 ?
            <div className="right">
              <Project
              aos="fade-up"
              image={this.state.projectOneImage}
              link="/imf"
              hmwClass="hmw hmw-exception"
              class="project-default"
              hmw={["A musical mood prediction App using Spotify data"]}
              color="rgba(251, 192, 96, 0.95)"
              title="In My Feelings"
              category="App"
              index="2"
              />
              <Project
              aos=""
              image={this.state.projectFourImage}
              link=""
              hyper="https://towardsdatascience.com/identifying-legendary-pok%C3%A9mon-using-the-random-forest-algorithm-ed0904d07d64"
              hmwClass="hmw hmw-exception"
              class="project-default"
              hmw={["Can we use ML to find Legendary Pokemon?"]}
              color="rgba(114, 164, 238, 0.95)"
              title="Legendary Pokemon Identification"
              category="Research"
              index="3"
              />
            </div> :
            <div className="right">
              <Project
              aos="fade-up"
              image={this.state.projectOneImage}
              link="/imf"
              hmwClass="hmw hmw-exception"
              class="project-default"
              hmw={["A musical mood prediction App using Spotify data"]}
              color="rgba(251, 192, 96, 0.95)"
              title="In My Feelings"
              category="App"
              index="2"
              />
              <Project
                aos=""
                image={this.state.projectFourImage}
                link=""
                hyper="https://towardsdatascience.com/identifying-legendary-pok%C3%A9mon-using-the-random-forest-algorithm-ed0904d07d64"
                hmwClass="hmw"
                class="project-default"
                hmw={["Can we use ML to find Legendary Pokemon?"]}
                color="rgba(114, 164, 238, 0.95)"
                title="Legendary Pokemon Identification"
                category="Research"
                index="3"
              />
            </div>
          }
        </section>
      </div>
    );
  }
}

export default Main;
