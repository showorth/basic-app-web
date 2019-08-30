import React, { Component } from 'react';
import { Button, Layout } from 'antd';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentTable from '../comment-list/CommentTable';
import { fetchCommentListRequest } from './CommentListActions';
import '../comment-list/CommentWrapper.scss'
import { Link } from 'react-router-dom'

const { Content } = Layout;

export class CommentListRedux extends Component {

    render() {

        const { comment } = this.props;

        return (
            <div className="comment-wrapper">
                <Layout>
                    <Link to='/comment-list-redux'>Redux Comment List</Link>
                    <Content style={{ padding: '50px' }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                            <h1 className="header-alignment">Comments</h1>
                            <CommentTable commentList={comment.commentList} />
                            <div className="align-right">
                                <Button className="button-alignment" type="primary" onClick={this.props.fetchCommentListRequest}>
                                    Fetch Comments
                                </Button>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </div >
        );
    }
};

CommentListRedux.propTypes = {
    comment: PropTypes.shape({
        commentList: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.number,
            name: PropTypes.string,
            date: PropTypes.string,
            comment: PropTypes.string,
        }))
    })
};

const mapStateToProps = state => ({
    comment: state.comment,
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchCommentListRequest,
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(CommentListRedux);
