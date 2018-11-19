import React, { Component } from 'react';
import Auth from './auth/Auth';
import NavBar from './home/Navbar';
import Gallery from './powers/Gallery';
import MyStuff from './powers/MyStuff';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: '',
      userID: ''
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = (token,id) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token, userID: id })
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
          <Route path='/' exact>
            <Gallery sessionToken={this.state.sessionToken} />
          </Route>
          <Route path="/MyStuff" exact><MyStuff sessionToken={this.state.sessionToken} userID={this.state.userID} /></Route>
        </Switch>
      )
    } else {
      return (
        <div>
        <Route path='/auth' >
          <Auth setToken={this.setSessionState} />
        </Route>
        </div>
      )
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div><NavBar clickLogout={this.logout} /></div>
          
         <div className="mainDiv"> {this.protectedViews()} </div>
        </div>
      </Router>
    );
  }
}

export default App;