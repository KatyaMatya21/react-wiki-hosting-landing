import React from 'react';

import './Footer.scss';
import Image from "../Image";
import logo from "../../img/logo.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="Footer__inner">
          <a className="Footer__logo" href="https://dribbble.com/katya_matya" title="Title">
            <Image image={logo}></Image>
          </a>
          <span className="Footer__span">Made with love ❤</span>
        </div>
      </footer>
    )
  }
}

export default Footer;
