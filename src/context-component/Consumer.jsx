/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import DataListContext from './ListContext';

export default class MyConsumer extends Component {
  render() {
    return (
      <DataListContext.Consumer>
        {(context) => (
          <pre>{JSON.stringify(context.value.dataList, null, '\t')}</pre>
        )}
      </DataListContext.Consumer>
    );
  }
}
