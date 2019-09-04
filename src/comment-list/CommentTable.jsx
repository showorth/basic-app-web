import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import './CommentTable.scss'

export class CommentTable extends PureComponent {

    render() {

        const { commentList } = this.props;

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                width: 150,
            },
            {
                title: 'Date',
                dataIndex: 'date',
                width: 150,
            },
            {
                title: 'Comment',
                dataIndex: 'comment',
            },
        ];

        return (
            <div className="comment-table">
                
                <Table className="comment-table-display" columns={columns} dataSource={commentList} />

            </div>
        )
    }
}

CommentTable.propTypes = {
    commentList: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number,
        name: PropTypes.string,
        date: PropTypes.string,
        comment: PropTypes.string,
    }))
};

export default CommentTable;