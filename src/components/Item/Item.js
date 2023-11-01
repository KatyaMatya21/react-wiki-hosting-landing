import React from 'react';

import './Item.scss';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="Item">
        <h3 className="Item__name">{this.props.name}</h3>
        <p className="Item__info">{this.props.info}</p>
        <div className="Item__price"><span>${this.props.price}</span>/month</div>
        <ul className="Item__list">
          {this.props.features.map( (item, index) => {
            return (
              <li>{item}</li>
            );
          })}
        </ul>
      </article>
    )
  }
}

export default Item;
