import React, { Component } from 'react';
import Auth from './auth/Auth';
import NavBar from './home/Navbar';
import Gallery from './home/Gallery';
import MyStuff from './powers/MyStuff';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  logout = () => {
    this.setState({
      sessionToken: '',
    });
    localStorage.clear();
  }

  

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path='/Gallery' exact>
            <Gallery sessionToken={this.state.sessionToken} />
          </Route>
          <Route path="/MyStuff" exact><MyStuff sessionToken={this.state.sessionToken} /></Route>
        </Switch>
      )
    } else {
      return (
        <Route path='/auth' >
          <Auth setToken={this.setSessionState} />
        </Route>
      )
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar clickLogout={this.logout} />
          {this.protectedViews()}
        </div>
      </Router>
    );
  }
}

export default App;