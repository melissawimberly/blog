import React, { Component } from 'react';
const books = require('../data').books;

class Books extends React.Component {
  getBooks = () => {
    return books.map((book, index) => {
      return (
        <div className="book-card" key={`${book.name}-${index}`}>
          <div className="book-image"></div>
          <div className="book-copy">
            <h2>{ book.type === 'book' ? 'Order Your Copy Now' : 'Download The App' }</h2>
            <div>{ book.type === 'book' ? this.getBookButtons(book) : this.getAppButtons(book) }</div>
          </div>
        </div>
      )
    })
  }

  getBookButtons = (book) => {
    return book.available_countries.map((country, index) => {
      return <button className="available-countries" key={`${country}`}>{country}</button>
    })
  }

  getAppButtons = (app) => {
    return app.available_software.map((software, index) => {
      return <button className="available-software" key={`${software}`}>{software}</button>
    })
  }

  render() {
    return (
      <div className="books-wrapper">
        { this.getBooks() }
      </div>
    )
  }
}

export default Books;
