import React, { Component } from 'react'
import { List, Card } from 'antd'
function BlogList(props) {
  return (
    <Card>
      <List
        itemLayout='vertical'
        dataSource={props.blogs}
        size="small"
        renderItem={item => BlogCard(item)}
      >
      </List>
    </Card>
  )
}

const BlogCard = (blog) => {
  return (
    <List.Item className="Card">
      <List.Item.Meta title={<a href={`/blogs/${blog.id}`}>{blog.title}</a>} description={`${blog.author}  ${blog.time}`} />
      {blog.content}
    </List.Item>
  )
}

export default BlogList