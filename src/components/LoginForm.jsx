import React, { Component } from "react"
import { Card, Button, message, Form, Input } from "antd"
import { apiClient } from '../utils/api'
import './LoginForm.css'
class LoginFormUnwrapped extends Component {
  state = {
    loading: false,
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          loading: true,
        })
        let rq = this.props.login ? this.loginRequest : this.registerRequest
        rq(values).then(({ success, msg }) => {
          if (success) {
            this.props.done()
            message.success(msg)
          } else {
            message.error(msg)
            this.setState({
              loading: false,
            })
          }
        })
      }
    })
  }

  loginRequest = async (values) => {
    const result = await apiClient.userLogin(values)
    if (result) {
      return {
        success: true,
        msg: '登陆成功!'
      }
    } else {
      return {
        success: false,
        msg: "用户名或密码错误",
      }
    }
  }
  registerRequest = async (values) => {
    const result = await apiClient.createUser(values)
    if (result) {
      return {
        success: true,
        msg: '注册成功'
      }
    } else {
      return {
        success: false,
        msg: "注册失败",
      }
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const data = this.props.login ? loginData : registerData
    return (
      <Card
        title={this.props.login ? "登陆" : "注册"}
        bordered={false}
      >
        <Form
          onSubmit={this.handleSubmit}
          className="form"
        >
          {formBuilder(getFieldDecorator, data)}
          <Form.Item>
            <Button
              loading={this.state.loading}
              type="primary"
              block={true}
              htmlType="submit"
            >
              {this.props.login ? "登录" : "注册"}
            </Button>
          </Form.Item>
        </Form>
        <button className="link-button" onClick={this.props.toggleLogin}>{this.props.login ? "注册新用户" : "返回登录"}</button>
      </Card>
    )
  }
}


const loginData = [
  {
    key: "username",
    placeholder: "用户名",
    type: "",
    rules: [
      {
        required: true,
        message: "请输入用户名",
      },
    ],
  },
  {
    key: "password",
    placeholder: "密码",
    type: "password",
    rules: [
      {
        required: true,
        message: "请输入密码",
      },
    ],
  },
]

const registerData = [
  {
    key: "username",
    placeholder: "用户名",
    type: "",
    rules: [
      {
        required: true,
        message: '请输入用户名'
      }, {
        whitespace: true,
        message: '不能含有空格'
      }, {
        min: 8,
        message: '长度至少为8位'
      }, {
        max: 16,
        message: '长度最长为16位'
      },
    ],
  },
  {
    key: "password",
    placeholder: "密码",
    type: "password",
    rules: [
      {
        required: true,
        message: '请输入密码'
      }, {
        whitespace: true,
        message: '不能含有空格'
      }, {
        min: 8,
        message: '长度至少为8位'
      }, {
        max: 16,
        message: '长度最长为16位'
      },
    ],
  },
  {
    key: "repeatPassword",
    placeholder: "重复密码",
    type: "password",
    rules: [
      {
        required: true,
        message: '请输入密码'
      }, {
        whitespace: true,
        message: '不能含有空格'
      }, {
        min: 8,
        message: '长度至少为8位'
      }, {
        max: 16,
        message: '长度最长为16位'
      },
    ],
  },
]
const formBuilder = (getFieldDecorator, items) => {
  return items.map(item => (
    <Form.Item key={item.key}>
      {
        getFieldDecorator(item.key, {
          rules: item.rules
        })(
          <Input
            placeholder={item.placeholder}
            type={item.type}
            value=""
          />
        )
      }
    </Form.Item>
  ))
}

const LoginForm = Form.create()(LoginFormUnwrapped)

export default LoginForm