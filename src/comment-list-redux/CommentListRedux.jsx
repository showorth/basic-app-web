import React, { Component } from 'react';
import { Button, Layout } from 'antd';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentTable from '../comment-list-state/CommentTable';
import { fetchCommentListRequest } from './CommentListActions';
import '../comment-list-state/CommentWrapper.scss';
import { CommentHeader } from '../PageHeader';

const { Content } = Layout;

export class CommentListRedux extends Component {
  componentDidMount() {
    this.props.fetchCommentListRequest();
  }

  render() {
    const { comment } = this.props;

    return (
      <div className="comment-wrapper">
        <Layout className="page-layout">
          <CommentHeader currentPage="redux" />
          <Content className="content-layout">
            <div className="div-layout">
              <h1 className="header-alignment">Comment List Redux</h1>
              <CommentTable commentList={comment.commentList} />
              <div className="align-right">
                <Button className="button-alignment" type="primary" onClick={this.props.fetchCommentListRequest}>
                  Fetch Comments
                </Button>
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

CommentListRedux.propTypes = {
  comment: PropTypes.shape({
    commentList: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.number,
      name: PropTypes.string,
      date: PropTypes.string,
      comment: PropTypes.string,
    })),
  }).isRequired,
  fetchCommentListRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  comment: state.comment,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchCommentListRequest,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(CommentListRedux);
