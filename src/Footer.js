import React, { Component } from 'react';
import './App.css';
import './Responsive.css';
import behance from './img/behance-logo.png'
import linkedin from './img/linkedin-logo.png'
import medium from './img/medium-logo.png'
import email from './img/email-logo.png'

class Footer extends Component {
  state={
    behance: behance,
    linkedin: linkedin,
    medium: medium,
    email: email
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-statement">
          Let's work together!
        </div>
        <div className="social-links">
          <div className="social">
            <a href="https://www.linkedin.com/in/sylvester-c/" target="_blank" rel="noopener noreferrer">
              <img className="linkedin" src={this.state.linkedin} alt="Linkedin Logo"/>
            </a>
          </div>
          <div className="social">
            <a href="https://medium.com/@silvercloud438" target="_blank" rel="noopener noreferrer">
              <img className="medium" src={this.state.medium} alt="Medium Logo"/>
            </a>
          </div>
          <div className="social-last">
            <a href="mailto:sylvester@cardorelle.io" target="_blank" rel="noopener noreferrer">
              <img className="email" src={this.state.email} alt="Email Logo"/>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          © 2020 Made with love by Sylvester Cardorelle
        </div>
      </div>
    );
  }
}

export default Footer;
