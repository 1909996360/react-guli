import { Component } from "react";
import styles from './login.module.less'
import { Button, Form, Input } from 'antd';
import {Navigate} from 'react-router-dom'

class Login extends Component {
    state = {
        user:null
    }
     onFinish = (values) =>{
        const { username, password } = values
        if (username && password) {
            this.setState({ user: '222' })
          }
      }

    render() {
        const LoginForm = (
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    className={styles.loginForm}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
        )
        const { user } = this.state


        return (
            <div className={styles.lgContainer}>
                {user &&(<Navigate to="/Home" replace="true"></Navigate>)}
                {LoginForm}
            </div>
        )
    }
}

export default Login
