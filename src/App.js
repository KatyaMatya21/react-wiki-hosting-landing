import React from 'react';

import Header from './components/Header/Header';
import Head from "./components/Head/Head";
import Features from "./components/Features/Features";
import Plans from "./components/Plans/Plans";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: 'home',
      helpText: "Oh, I'm not good at thinking!",
      userData: ""
    }

    this.inputClick = this.inputClick.bind(this);
  }
  render () {
    return (<div>

      <Header />
      <Head />
      <Features />
      <Plans />
      <Contacts />
      <Footer />

      <h1>{this.state.helpText}</h1>
      <h2>{this.state.userData}</h2>
      <input placeholder={this.state.helpText}
             onChange={event => this.setState({userData:event.target.value})}
             onClick={this.inputClick}
             onMouseEnter={this.mouseOver}
      />
      <p>{this.state.helpText === "I'm input!" ? "Yes" : "No" }</p>

    </div>)
  }

  inputClick() {
    this.setState({helpText:"I'm good at thinking!"});
    console.log("inputClick");
  }
  mouseOver() {
    console.log("mouseOver");
  }
}

export default App;
