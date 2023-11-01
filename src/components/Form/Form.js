import React from 'react';

import './Form.scss';

class Form extends React.Component {
  render() {
    return (
      <form className="Form" action="#">
        <div className="Form__group">
          <label className="sr-only" htmlFor="name"><span className="sr-only">Name</span></label>
          <input className="Form__input" type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div className="Form__group">
          <label className="sr-only" htmlFor="email"><span className="sr-only">Email</span></label>
          <input className="Form__input" type="text" name="email" id="email" placeholder="Email" required="" />
        </div>
        <div className="Form__group">
          <label className="sr-only" htmlFor="message"><span className="sr-only">Your message</span></label>
          <textarea className="Form__textarea" rows="4" cols="40" name="message" id="message" placeholder="Your message" required="" ></textarea>
        </div>
        <p className="Form__info">By submitting your information you provide written consent to Bluehost and its family of brands contacting you. <b>*</b> See full details.</p>
        <button className="Form__button reset-button" type="submit">Send</button>
      </form>
    )
  }
}

export default Form;
