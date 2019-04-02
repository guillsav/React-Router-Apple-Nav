import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import SubNav from './SubNav';

import './NavWrapper.css';
import Home from './Home';

const NavWrapper = ({data}) => {
  console.log(data);
  return (
    <React.Fragment>
      <div className="NavWrapper">
        {data.map((data, index) => {
          return (
            <NavLink key={index} to={`/${data.category.toLowerCase()}`}>
              {data.category}
            </NavLink>
          );
        })}
      </div>
      <Route exact path="/home" component={Home} />
    </React.Fragment>
  );
};

export default NavWrapper;
