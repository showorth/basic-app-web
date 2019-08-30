import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import CommentWrapper from './comment-list/CommentWrapper';
import CommentListRedux from './comment-list-redux/CommentListRedux';



export class Router extends Component {

    render() {

        return (
            <div className="Router">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/comment-list' component={CommentWrapper} />
                        <Route exact path='/comment-list-redux' component={CommentListRedux} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
};

export default Router;
