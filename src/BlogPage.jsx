import React, { Component } from 'react';
import { apiClient } from './utils/api'
import { Skeleton, Card, List, Tag } from 'antd'
import BraftEditor from 'braft-editor';
import ErrorDisplay from './components/ErrorDisplay'
import './BlogPage.css'
import 'braft-editor/dist/index.css'

class BlogPage extends Component {
  state = {
    loading: true,
    editorState: null,
  }
  componentDidMount() {
    const username = this.props.match.params.username
    const title = this.props.match.params.title
    apiClient.getBlogByTitle(username, title).then((blog) => {
      if (blog) {
        this.blog = blog
        this.setState({
          loading: false,
          editorState: BraftEditor.createEditorState(this.blog.content),
        })
      } else {
        this.setState({
          loading: false,
        })
      }
    })
  }
  render() {
    if (this.state.loading) {
      return (
        <Card>
          <Skeleton active />
        </Card>
      )
    } else if (this.blog == null) {
      return (
        <ErrorDisplay />
      )
    } else {
      return (
        <Card>
          <article className="article">
            <h1 className="title">{this.blog.title}</h1>
            <div className="info">
              <div>
                {this.blog.author}
              </div>
              <div>
                {this.blog.time}
              </div>
              {renderLabels(this.blog.labels)}
            </div>
            <BraftEditor
              controls={[]}
              value={this.state.editorState}
            />
          </article>
          <List
            itemLayout="horizontal"
            dataSource={this.blog.reviews}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<a>{item.reviewer}</a>}
                  description={item.content}
                />
              </List.Item>
            )}
          />
        </Card>
      )
    }
  }
}
const renderLabels = (labels) => {
  return (
    <div>
      {labels.map(label =>
        (<Tag><a href={`/labels/${label}/blogs`}>{label}</a></Tag>)
      )}
    </div>
  )
}

export default BlogPage