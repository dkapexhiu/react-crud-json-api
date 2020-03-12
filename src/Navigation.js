import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Crud from './Crud.js';
import './Navigation.css';
import Login from './login.js';
import Auth from './Authenticate.js';

const Navigation = () => (
  <Router>
  <div>
    <ul id="menu" style={{display:'inlineBlock', marginLeft:'25%', width:'50%'}}>
      <li className="products"><Link to="/users">Users</Link></li>
      <li className="login"><Link to="/login">LogIn</Link></li>
    </ul>
    <PrivateRoute path="/users" component={Crud}/>
    <Route path="/login" component={Login}/>
  </div>
  </Router>
)

  const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
  )

export default Navigation;