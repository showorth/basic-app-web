import React, { Component } from 'react';
import { Button, Layout } from 'antd';
import CommentTable from './CommentTable';
import AxiosApiClient from '../AxiosApiClient';
import './CommentWrapper.scss';
import '../PageWrapper.scss';
import { CommentHeader } from '../PageHeader';

const { Content } = Layout;

export class CommentWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commentList: [],
        };
    };


    mapResponsetoState = (apiCommentList = []) => {
        return apiCommentList.map((c) => {
            return {
                key: c.id,
                name: c.name,
                date: c.date,
                comment: c.comment
            };
        });
    };

    onButtonClick = async () => {

        const result = await AxiosApiClient.getRequest('comments');
        this.setState({
            commentList: this.mapResponsetoState(result)
        });

        console.log(this.state.commentList);
    }

    render() {

        const { commentList } = this.state;

        return (
            <div className="comment-wrapper">
                <Layout className="page-layout">
                    <CommentHeader currentPage="wrapper" />
                    <Content className="content-layout" >
                        <div className="div-layout">
                            <h1 className="header-alignment">Comment List Wrapper</h1>
                            <CommentTable commentList={commentList} />
                            <div className="align-right">
                                <Button className="button-alignment" type="primary" onClick={this.onButtonClick}>
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

export default CommentWrapper;
