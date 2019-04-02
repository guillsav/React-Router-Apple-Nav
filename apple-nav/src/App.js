import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import Home from './components/Home';
import {data} from './data';

import './App.css';

class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.setState({
      data
    });
  }
  render() {
    return (
      <div className="App">
        <div className="nav">
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavWrapper data={this.state.data} />
          </div>
        </div>
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
