import React from 'react';

import './Head.scss';

import Image from "../Image";

import headImage from "./image.png";

class Head extends React.Component {
  render() {
    return (
      <section className="Head">
        <div className="Head__inner">
          <div className="Head__wrap">
            <div className="Head__left">
              <h2>Bring your website to life.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur corporis deserunt doloribus non odit officiis, perferendis quibusdam sint velit?</p>
            </div>
            <div className="Head__right">
              <Image image={headImage}></Image>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Head;
