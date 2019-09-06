import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = createContext();

const ListProvider = (props) => (
  <Provider value={props}>
    {props.children}
  </Provider>
);

ListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export default {
  Consumer, ListProvider,
};
