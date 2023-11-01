import React from 'react';

import './Features.scss';

import Image from "../Image";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";

class Features extends React.Component {
  render() {
    return (
      <section className="Features">
        <div className="Features__inner">
          <h2 className="sr-only">Features</h2>
          <ul>
            <li>
              <h3>Fast</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div className="Features__image"><Image image={image1}></Image></div>
            </li>
            <li>
              <h3>Secure</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div className="Features__image"><Image image={image2}></Image></div>
            </li>
            <li>
              <h3>Professional</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div className="Features__image"><Image image={image3}></Image></div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Features;
