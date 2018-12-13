import axios from 'axios'

class ApiClient {
  axiosInstance
  jwtToken
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://localhost::8000/api/',
      timeout: 5000,
    })
  }
  createUser = async (userData) => {
    try {
      const response = await this.axiosInstance.post('users', userData)
      const user = response.data
      return true
    } catch (err) {
      return false
    }
  }
  updateUser = async (userData) => {
    try {
      const response = await this.axiosInstance.patch('user', userData)
      const user = response.data
      return true
    } catch (err) {
      return false
    }
  }
  userLogin = async (userData) => {
    try {
      const response = await this.axiosInstance.put('user/login')
      const jwtToken = response.data
      this.setJwtToken(jwtToken)
      return true
    } catch (err) {
      return false
    }
  }
  publishBlog = async (blogData) => {
    try {
      const response = await this.axiosInstance.post('user/blogs')
      const blog = response.data
      return blog
    } catch (err) {
      return false
    }
  }
  getBlogsBySelf = async () => {
    try {
      const response = await this.axiosInstance.get('/user/blogs')
      const blogs = response.data;
      return blogs
    } catch (err) {
      return false
    }
  }
  getBlogsByUsername = async (username) => {
    try {
      const response = await this.axiosInstance.get(`users/${username}/blogs`)
      const blogs = response.data
      return blogs
    } catch (err) {
      return false
    }
  }
  getAllBlogs = async () => {
    try {
      const response = await this.axiosInstance.get('blogs')
      const blogs = response.data
      return blogs
    } catch (err) {
      return false
    }
  }
  getBlogByTitle = async (username, title) => {
    try {
      const response = await this.axiosInstance.get(`blogs/${username}/${title}`)
      const blog = response.data;
      return blog;
    } catch (err) {
      return false;
    }
  }
  review = async (username, title, content) => {
    try {
      const response = await this.axiosInstance.post(`blogs/${username}/${title}/reviews`, {
        content
      })
      const review = response.review
      return true
    } catch (err) {
      return false
    }
  }
  getReviewByBlog = async (username, title) => {
    try {
      const response = await this.axiosInstance.get(`blogs/${username}/${title}/reviews`)
      const reviews = response.data
      return reviews
    } catch (err) {
      return false
    }
  }
  logout = () => {
    this.setJwtToken('')
  }
  setJwtToken = (token) => {
    this.jwtToken = token;
    this.axiosInstance.header.commo['Authorization'] = token;
  }
  getJwtToken = () => {
    return this.jwtToken
  }
}
const delay = (time) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time)
  })
}
export const apiClient = new ApiClient();