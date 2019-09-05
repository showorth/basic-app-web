import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import './CommentTable.scss';

export class CommentTable extends PureComponent {
  render() {
    const { commentList } = this.props;

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 150,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        width: 150,
      },
      {
        title: 'Comment',
        key: 'comment',
        dataIndex: 'comment',
      },
    ];

    return (
      <div className="comment-table">

        <Table className="comment-table-display" columns={columns} dataSource={commentList} rowKey={(r) => r.id} />

      </div>
    );
  }
}

CommentTable.propTypes = {
  commentList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    comment: PropTypes.string,
  })).isRequired,
};

export default CommentTable;
