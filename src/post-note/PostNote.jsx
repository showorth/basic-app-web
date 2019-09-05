import React, { Component } from 'react';
import { Button, Layout, Input } from 'antd';
import '../PageWrapper.scss';
import { CommentHeader } from '../PageHeader';
import NoteTable from './NoteTable';

const { Content } = Layout;
const { TextArea } = Input;

export class PostNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputVal: null,
            noteList: [{
                key: 0,
                note: "Place for me to write notes to self"
            }],
        };
    };
    onInputChange = ({ target: { value } }) => {
        this.setState({ inputVal: value });
    }

    onNoteSubmit = () => {

        const noteObj = {
            key: this.state.noteList.length,
            note: this.state.inputVal
        };

        this.setState({
            noteList: [...this.state.noteList].concat(noteObj),
            inputVal: ''
        });

    }

    render() {
        return (
            <div className="note-wrapper">
                <Layout className="page-layout">
                    <CommentHeader currentPage="note" />
                    <Content className="content-layout" >
                        <div className="div-layout">
                            <h1 className="header-alignment">Note Posts</h1>
                            <TextArea placeholder="Type a Note Here" value={this.state.inputVal} onChange={this.onInputChange} />
                            <div className="align-rightant design">
                                <Button className="button-alignment" type="primary" onClick={this.onNoteSubmit}>
                                    Add Note
                                </Button>
                            </div>
                            <NoteTable noteList={this.state.noteList} />
                        </div>
                    </Content>
                </Layout>
            </div >
        );
    }
};

export default PostNote;
