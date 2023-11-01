import React from 'react';

import './Plans.scss';

import Item from "../Item/Item";

class Plans extends React.Component {
  render() {
    return (
      <section className="Plans">
        <div className="Plans__inner">
          <h2>Plans</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur cum deleniti ea error est eum eveniet.</p>
          <div className="Plans__list">

            <Item name="BASIC" info="Small description" price="10" features={['Consequatur consequuntur','Deleniti ea error','Lorem ipsum dolor sit']} />
            <Item name="STANDART" info="Small description" price="15" features={['Consequatur consequuntur cum deleniti','Lorem ipsum dolor sit','Lorem adsd asda']} />
            <Item name="PRO" info="Small description" price="20" features={['Ea error est eum eveniet','Lorem ipsum dolor sit','Consequatur consequuntur cum deleniti']} />

          </div>
        </div>
        <div className="Plans__block"></div>
      </section>
    )
  }
}

export default Plans;
