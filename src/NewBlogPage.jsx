import React, { Component } from "react"
import BraftEditor from 'braft-editor'
import { Card, Button, Form, Input } from "antd"
import 'braft-editor/dist/index.css'
import './NewBlogPage.css'

class NewBlogPage extends Component {
  state = {
    editorState: BraftEditor.createEditorState('<p>在这里输入你的文章</p>'),
    outputHTML: '<p></p>'
  }
  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }
  render() {
    const excludeControls = ['link', 'media']
    return (
      <Card className="container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="标题">
            <Input />
          </Form.Item>
          <Form.Item label="梗概">
            <Input />
          </Form.Item>
          <Form.Item label="文章">
            <BraftEditor
              className="editor"
              value={this.state.editorState}
              onChange={this.handleChange}
              excludeControls={excludeControls}
            />
          </Form.Item>
        </Form>

        <Button size='large' type='primary' htmlType='submit'>
          发布
        </Button>
      </Card>

    )
  }
}

export default NewBlogPage