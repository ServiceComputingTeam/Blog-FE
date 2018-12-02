import React, { Component } from 'react'
import { Card, List } from 'antd'
import './BlogListPage.css'
const artical = {
  title: "Title",
  author: "Author",
  time: "2017.10.20",
  content: "Test"
}
const BlogCard = (blog) => {
  return (
    <List.Item className="Card">
      <List.Item.Meta title={blog.title} description={`${blog.author}  ${blog.time}`} />
      {blog.content}
    </List.Item>
  )
}
let blogs = []
for (let i = 0; i < 5; i++) {
  blogs.push(artical)
}
class BlogListPage extends Component {
  render() {
    return (
      <Card>
        <List
          itemLayout='vertical'
          dataSource={blogs}
          size="small"
          renderItem={item => (
            BlogCard(item)
          )}
        >
        </List>
      </Card>
    );
  }
}

export default BlogListPage;
