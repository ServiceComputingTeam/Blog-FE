import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import './App.css';
import BlogListPage from './BlogListPage'
import BlogPage from './BlogPage'
import NewBlogPage from './NewBlogPage'
import LoginButton from './components/LoginButton';

const { Header, Content } = Layout;

class App extends Component {
  render() {

    return (
      <Router>
        <Layout className='layout'>
          <Header className="header">
            <div className='logo' />
            <Menu
              theme='dark'
              mode='horizontal'
              defaultSelectedKeys={['0']}
              className="menu-block"
            >
              <Menu.Item key='BlogListPage'>
                <Link to='/'>首页</Link>
              </Menu.Item>
              <Menu.Item className='user-button' >
                <LoginButton />
              </Menu.Item>
            </Menu>

          </Header>
          <Content className="main-content">
            <Route path='/' exact component={BlogListPage} />
            <Route path='/Blogs' exact component={BlogListPage} />
            <Route path='/Blogs/:username/:title' exact component={BlogPage} />
            <Route path='/New/Blog' exact component={NewBlogPage} />
          </Content>
        </Layout>
      </Router>
    );
  }
}
export default App;
