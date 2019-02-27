import React, { Component } from 'react';
import './page3.css';

class Page3 extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <h2>Sticky Contact Form for Bootstrap</h2>
          <div className="nb-form">
            <p className="title">Send a message</p>
            <img src="../img/2.png" alt className="user-icon" />
            <p className="message">This is an awesome example of sticky contact form on right bottom of the page</p>
            <form>
              <input type="text" name="cpname" placeholder="Name:" required />
              <input type="email" name="cpemail" placeholder="Email:" required />
              <input type="tel" name="cpphone" placeholder="Phone:" required />
              <textarea name="cpmessage" placeholder="Message:" required defaultValue={""} />
              <input type="submit" defaultValue="Send message" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Page3;