import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import CommentWrapper from './comment-list/CommentWrapper';
import CommentListRedux from './comment-list-redux/CommentListRedux';
import CommentListHooks from './comment-list-hooks/CommentListHooks';
import { CommentHeader } from './PageHeader';



export class Router extends Component {

    render() {

        return (
            <div className="Router">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={CommentHeader} />
                        <Route exact path='/comment-list' component={CommentWrapper} />
                        <Route exact path='/comment-list-redux' component={CommentListRedux} />
                        <Route exact path='/comment-list-hooks' component={CommentListHooks} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
};

export default Router;
