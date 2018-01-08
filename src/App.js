import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import './Components/Home';
// import './Components/Recipes';
// import './Components/Blog';
// import './Components/Delis';
// import './Components/Shop';
// import './Components/Contact';

const Home = () => {
  <div><h2>Home</h2></div>
}

const Recipes = () => {
  <div><h2>Recipes</h2></div>
}

const Blog = () => {
  <div><h2>Blog</h2></div>
}

const Delis = () => {
  <div><h2>Delis</h2></div>
}

const Shop = () => {
  <div><h2>Shop</h2></div>
}

const Contact = () => {
  <div><h2>Contact</h2></div>
}

const App = () => {
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/delis">Delis</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <hr/>

      <Route exact path="/" component={Home} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/blog" component={Blog} />
      <Route path="/delis" component={Delis} />
      <Route path="/shop" component={Shop} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>

}

export default App
