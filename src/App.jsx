import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import './App.css';
import BlogListPage from './BlogListPage'
import BlogPage from './BlogPage'
import NewBlogPage from './NewBlogPage'
import LoginForm from './components/LoginForm';

const { Header, Content, Footer } = Layout;

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
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key='BlogListPage'>
                <Link to='/'>首页</Link>
              </Menu.Item>
            </Menu>
            <LoginForm className="user-button" />
          </Header>
          <Content>
            <Route path='/' exact component={BlogListPage} />
            <Route path='/Blogs' exact component={BlogListPage} />
            <Route path='/Blogs/:id' exact component={BlogPage} />
            <Route path='/New/Blog' exact component={NewBlogPage} />
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default App;
