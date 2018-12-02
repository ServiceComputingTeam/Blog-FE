import axios from 'axios'

const apiUrl = "/api"
axios.defaults.baseURL = apiUrl

export const getBlog = async (id) => {
  // try {
  //   const response = await axios.get(`Blogs/${id}`)
  // } catch (err) {
  //   console.log(err)
  // }
  // const blog = response.data;
  // return blog
  return {
    title: 'Title',
    author: 'Author',
    time: '2017-02-15',
    content: '<h1>Test</h1>'
  }
}