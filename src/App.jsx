import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import './Main.scss';
import store from './store';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

