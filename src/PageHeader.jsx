import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

function PageHeader(props) {

  const [current, setCurrent] = useState([ props.currentPage ]);


  const handleClick = e => {
    console.log('click ', e);
    setCurrent([ e.key ]);
  };

  return (

    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        onClick = {handleClick}
        selectedKeys={current}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="wrapper">
          <Link to='/comment-list'>Comment List Wrapper</Link>
        </Menu.Item>
        <Menu.Item key="redux">
          <Link to='/comment-list-redux'>Comment List Redux</Link>
        </Menu.Item>
        <Menu.Item key="hooks" >
          <Link to='/comment-list-hooks'>Comment List Hooks</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export const CommentHeader = React.memo(PageHeader);
