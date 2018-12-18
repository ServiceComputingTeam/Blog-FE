import React, { Component } from 'react'
import { Modal, Button } from 'antd'
import LoginForm from './LoginForm'
class LoginButton extends Component {
  state = {
    modalOn: false,
    onLoading: false,
    login: true,
  }
  handleCancel = () => {
    this.setState({
      modalOn: false,
    })
  }
  handleClick = () => {
    this.setState({
      modalOn: true,
    })
  }
  toggleLogin = () => {
    this.setState({
      login: !this.state.login,
    })
  }
  handleDone = () => {
    this.setState({
      modalOn: false,
    })
  }
  render() {
    return (
      <>
        <Button
          onClick={this.handleClick}
        >
          登录
        </Button>
        <Modal
          width="400px"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          visible={this.state.modalOn}
          confirmLoading={this.state.onLoading}
          cancelText="取消"
          destroyOnClose={true}
          okText={this.state.login ? "登录" : "注册"}
          footer={null}
        >
          <LoginForm
            done={this.handleDone}
            login={this.state.login}
            toggleLogin={this.toggleLogin}
            valueChange={this.handleSubmit}
          />
        </Modal>
      </>
    )
  }
}
export default LoginButton