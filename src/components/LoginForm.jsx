import React, { Component } from "react";
import { Button, Modal } from "antd";

class LoginForm extends Component {
  state = {
    modalOn: false,
    login: true,
    confirmLoading: false,
  }
  handleCancel = () => {

  }
  handleOk = () => {

  }

  showModal = () => {
    this.setState({
      modalOn: true,
    })
  }
  render() {
    return (
      <div>
        <Button onClick={this.showModal}>
          登录
        </Button>
        <Modal
          visible={this.state.modalOn}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          confirmLoading={this.state.confirmLoading}
        >

        </Modal>
      </div>
    )
  }
}

export default LoginForm