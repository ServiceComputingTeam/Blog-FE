import React, { Component } from 'react';
import * as api from './utils/api'
import { Skeleton, Card } from 'antd'
import BraftEditor from "braft-editor";
import './BlogPage.css'
import 'braft-editor/dist/index.css'

class BlogPage extends Component {
  state = {
    loading: true,
    editorState: null,
  }
  constructor(props) {
    super(props)
    this.id = this.props.match.params.id
    this.blog = {}
    api.getBlog(this.id).then((blog) => {
      this.blog = blog
      this.setState({
        loading: false,
        editorState: BraftEditor.createEditorState(this.blog.content),
      })

    })
  }
  render() {
    if (this.state.loading) {
      return (
        <Skeleton active />
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
            </div>
            <BraftEditor
              controls={[]}
              value={this.state.editorState}
            />
          </article>
        </Card>
      )
    }
  }
}


export default BlogPage