import React, { Component } from 'react';
import './Main.scss';
import CommentWrapper from './comment-list/CommentWrapper';


export class App extends Component {

  render() {

    return (
      <div className="App">
        <CommentWrapper/>
      </div>
    );
  }
};

export default App;
