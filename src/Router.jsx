import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import CommentWrapper from './comment-list-state/CommentWrapper';
import CommentListRedux from './comment-list-redux/CommentListRedux';
import CommentListHooks from './comment-list-hooks/CommentListHooks';
import PostNote from './post-note/PostNote';
import { CommentHeader } from './PageHeader';
import ContextList from './context-component/Provider';


const Router = () => (
  <div className="Router">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CommentHeader} />
        <Route exact path="/comment-list" component={CommentWrapper} />
        <Route exact path="/comment-list-redux" component={CommentListRedux} />
        <Route exact path="/comment-list-hooks" component={CommentListHooks} />
        <Route exact path="/post-note" component={PostNote} />
        <Route exact path="/context" component={ContextList} />
      </Switch>
    </BrowserRouter>
  </div>
);


export default Router;
