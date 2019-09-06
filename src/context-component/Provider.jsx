import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import ListContext from './ListContext';
import ContextListConsumer from './Consumer';
import FetchApiClient from '../FetchApiClient';
import { CommentHeader } from '../PageHeader';

const { Content } = Layout;

class ContextList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      dataList: [],
    };
  }

  componentDidMount = async () => {
    const data = await FetchApiClient.getRequest('comments');
    this.setState({
      dataList: data,
    });
    console.log('ContextList did mount');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('ContextList will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('ContextList will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('ContextList did update');
  }

  componentWillUnmount = () => {
    console.log('ContextList will unmount');
  }

  render() {
    const { dataList } = this.state;
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ContextListWrapper">

        <Layout className="page-layout">
          <CommentHeader currentPage="context" />
          <Content className="content-layout">
            <div className="div-layout">
              <h1 className="header-alignment">Comment Context Response</h1>
              <ListContext.ListProvider value={{ dataList }}>
                <ContextListConsumer />
              </ListContext.ListProvider>
            </div>
          </Content>
        </Layout>

      </div>
    );
  }
}

export default ContextList;
