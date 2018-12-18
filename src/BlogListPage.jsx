import React, { Component } from 'react'
import { Card, List, Skeleton } from 'antd'
import { apiClient } from './utils/api'
import BlogList from './components/BlogList'
import './BlogListPage.css'

class BlogListPage extends Component {
  state = {
    loading: true,
    blogs: [],
  }
  componentDidMount() {
    apiClient.getAllBlogs().then(blogs => {
      if (blogs) {
        this.setState({
          blogs,
          loading: false,
        })
      } else {

      }
    })
  }
  render() {
    if (this.state.blogs) {
      return (
        <BlogList
          blogs={this.state.blogs}
        />
      );
    } else {
      return (
        <Skeleton active={true} />
      )
    }
  }
}


export default BlogListPage;
