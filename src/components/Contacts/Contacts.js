import React from 'react';

import './Contacts.scss';

import Form from "../Form/Form";

class Contacts extends React.Component {
  render() {
    return (
      <section className="Contacts">
        <div className="Contacts__inner">
          <h2 className="Contacts__title">Request a consultation</h2>
          <p className="Contacts__text">Schedule a call today and one of our experts will be happy to help you decide which professional service is ideal for your business and budget.</p>

          <Form />

        </div>
      </section>
    )
  }
}

export default Contacts;
