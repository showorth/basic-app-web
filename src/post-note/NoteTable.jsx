import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

export class NoteTable extends Component {
  shouldComponentUpdate(nextProps) {
    const { noteList } = this.props;
    const nextNoteList = nextProps.noteList;
    return noteList.length !== nextNoteList.length;
  }

  render() {
    const { noteList } = this.props;

    const columns = [
      {
        title: 'Note',
        dataIndex: 'note',
        width: 150,
      },
    ];

    return (
      <div className="note-table">
        <Table className="note-table-display" columns={columns} dataSource={noteList} />
      </div>
    );
  }
}

NoteTable.propTypes = {
  noteList: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number,
    note: PropTypes.string,
  })).isRequired,
};

export default NoteTable;
