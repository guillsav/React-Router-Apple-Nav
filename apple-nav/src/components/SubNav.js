import React from 'react';
import {Route, Link} from 'react-router-dom';
import _ from 'lodash';
import './SubNav.css';

const Global = props => {
  return (
    <div className="Global">
      <h2> </h2>
    </div>
  );
};

const SubNav = props => {
  const items = props.data.find(item => {
    return _.toLower(props.match.params.category) === _.toLower(item.category);
  });

  if (props.data.length === 0) {
    return null;
  }

  return (
    <div className={`${items.devices ? 'SubNav' : 'Global'}`}>
      <div className="SubNav-container">
        {items.devices ? (
          items.devices.map(product => {
            return (
              <Link
                key={product.id}
                to={`/${props.match.params.category}/${_.toLower(
                  product.item.replace(/\s/g, '')
                )}`}
              >
                {product.item}
              </Link>
            );
          })
        ) : (
          <Route
            path={`/${items.category.toLowerCase()}`}
            render={() => <Global data={items.category} />}
          />
        )}
      </div>
    </div>
  );
};

export default SubNav;
