import React, { Component } from 'react';
import { Layout, Input } from 'antd';
import '../PageWrapper.scss';
import styled from 'styled-components';
import { CommentHeader } from '../PageHeader';
import NoteTable from './NoteTable';

const { Content } = Layout;
const { TextArea } = Input;


const StyleButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #108ee9;
  border: 2px solid #108ee9;
  padding: 0.25em 1em;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #108ee9;
    color: white;
  }
`;

const ButtonDiv = styled.div`
  text-align: right;
`;

export class PostNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: null,
      noteList: [{
        key: 0,
        note: 'Place for me to write notes to self',
      }],
    };
  }

    onInputChange = ({ target: { value } }) => {
      this.setState({ inputVal: value });
    }

    onNoteSubmit = () => {
      const noteObj = {
        key: this.state.noteList.length,
        note: this.state.inputVal,
      };

      this.setState((previousState) => ({ noteList: [...previousState.noteList].concat(noteObj), inputVal: '' }));
    }

    render() {
      return (
        <div>
          <Layout className="page-layout">
            <CommentHeader currentPage="notes" />
            <Content className="content-layout">
              <div className="div-layout">
                <h1 className="header-alignment">Note Posts</h1>
                <TextArea placeholder="Type a Note Here" value={this.state.inputVal} onChange={this.onInputChange} />
                <ButtonDiv>
                  <StyleButton type="primary" onClick={this.onNoteSubmit}>Add Note</StyleButton>
                </ButtonDiv>
                <NoteTable noteList={this.state.noteList} />
              </div>
            </Content>
          </Layout>
        </div>
      );
    }
}

export default PostNote;
