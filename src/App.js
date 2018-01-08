import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Components/Home';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Blog = () => (
  <div>
    <h2>Blog</h2>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)

const Shop = () => (
  <div>
    <h2>Shop</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Deli = ({ match }) => (
  <div>
    <h3>{match.params.deliId}</h3>
  </div>
)

const Recipe = ({ match }) => (
  <div>
    <h3>{match.params.recipeId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Delis = ({ match }) => (
  <div>
    <h2>Delis</h2>
    <ul>
      <li>
        <Link to={`${match.url}/kitchenCounter`}>
          The Kitchen Counter
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/weighhouseSt`}>
          Weighhouse Street
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/seymourPlace`}>
          Seymour Place
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:deliId`} component={Deli}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a Deli.</h3>
    )}/>
  </div>
)

const Recipes = ({ match }) => (
  <div>
    <h2>Recipes</h2>
    <ul>
      <li>
        <Link to={`${match.url}/kitchenCounter`}>
          The Kitchen Counter
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/weighhouseSt`}>
          Weighhouse Street
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/seymourPlace`}>
          Seymour Place
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:deliId`} component={Deli}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a Recipe.</h3>
    )}/>
  </div>
)


const BasicExample = () => (
  <Router>
    <div>
      <div className="main-nav-wrapper">
        <ul className="main-nav-list">
          <li className="user-nav-list-item clickable"><Link to="/about">About</Link></li>
          <li className="user-nav-list-item clickable"><Link to="/recipes">Recipes</Link></li>
          <li className="user-nav-list-item clickable"><Link to="/blog">Blog</Link></li>
          <li className="user-nav-list-item clickable list-item-logo"><Link to="/">Deliciously Ella</Link></li>
          <li className="user-nav-list-item clickable"><Link to="/delis">Delis</Link></li>
          <li className="user-nav-list-item clickable"><Link to="/shop">Shop</Link></li>
          <li className="user-nav-list-item clickable"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>

      <Route path="/recipes" component={Recipes} />
      <Route path="/blog" component={Blog} />
      <Route path="/delis" component={Delis} />
      <Route path="/shop" component={Shop} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)

export default BasicExample
