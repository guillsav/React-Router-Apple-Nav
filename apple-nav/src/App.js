import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import SubNav from './components/SubNav';
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
          <div className="NavWrapper">
            <NavLink to="/">Home</NavLink>
            {this.state.data.map(data => {
              return (
                <NavLink key={data.id} to={`/${data.category.toLowerCase()}`}>
                  {data.category}
                </NavLink>
              );
            })}
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route
          path="/:category"
          render={props => <SubNav {...props} data={this.state.data} />}
        />
      </div>
    );
  }
}

export default App;
