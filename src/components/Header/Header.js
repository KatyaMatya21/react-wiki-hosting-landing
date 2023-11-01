import React from 'react';

import './Header.scss';

import logo from "../../img/logo.png";

import Image from "../Image";

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <div className="Header__inner">
          <h1 className="sr-only">Title</h1>
          <a className="Header__logo" href="https://dribbble.com/katya_matya" title="Title">
            <Image image={logo}></Image>
          </a>
          <nav className="Header__nav">
            <ul className="Header__nav-list">
              <li className="Header__nav-item">
                <a className="Header__nav-link" href="https://dribbble.com/katya_matya" title="Home">Home</a>
              </li>
              <li className="Header__nav-item">
                <a className="Header__nav-link" href="https://dribbble.com/katya_matya" title="Rates">Rates</a>
              </li>
              <li className="Header__nav-item">
                <a className="Header__nav-link" href="https://dribbble.com/katya_matya" title="Contacts">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;
