import React, { useState, useEffect } from 'react';
import { Button, Layout } from 'antd';
import { CommentHeader } from '../PageHeader';
import CommentTable from '../comment-list-state/CommentTable';
import '../comment-list-state/CommentWrapper.scss';
import FetchApiClient from '../FetchApiClient';


const { Content } = Layout;

function CommentListHooks() {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      setCommentList(await FetchApiClient.getRequest('comments'));
    }
    fetchComments();
  }, []);

  const onButtonClick = async () => {
    setCommentList(await FetchApiClient.getRequest('comments'));
  };

  return (
    <div className="comment-wrapper">
      <Layout className="page-layout">
        <CommentHeader currentPage="hooks" />
        <Content className="content-layout">
          <div className="div-layout">
            <h1 className="header-alignment">Comment List Hooks</h1>
            <CommentTable commentList={commentList} />
            <div className="align-right">
              <Button className="button-alignment" type="primary" onClick={onButtonClick}>
                Fetch Comments
              </Button>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default CommentListHooks;
