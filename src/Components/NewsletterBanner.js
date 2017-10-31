
import React, { Component } from 'react';

class NewsletterBanner extends React.Component {

  render() {
    return (
      <div className="books-wrapper">
        <h1>Sign up to our Newsletter</h1>
        <input placeholder="Enter your email"></input>
        <button>Send</button>
      </div>
    )
  }
}

export default NewsletterBanner;
