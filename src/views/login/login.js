import styles from './login.module.less'
import { Button, Form, Input ,message} from 'antd';
import { Navigate } from 'react-router-dom'
import { PageComponent } from '../PageComponent/index'
import { userLogin } from '@/services/index'
class Login extends PageComponent {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            time: 1
        }
    }

    async componentDidMount() {
        // let res = await getByDomain()
        // console.log('res', res);
        console.log('触发子类componentDidMount');
    }
    componentWillUnmount() {
        console.log('触发子类componentWillUnmount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== nextState
    }
    componentDidCatch() {
        console.log('触发子类componentDidCatch');
    }
    componentDidUpdate() {
        console.log('触发子类componentDidUpdate');
    }
    onFinish = async(values) => {
        const hide = message.loading('正在登录....', 0);
        const { username, password } = values
        const data = await userLogin(username,password)
        hide()
        if(data && data.code === 200 && data.data){
            message.success('登录成功');
            this.setState({
                user:true
            })
        }else{
            message.error(data.msg + '，请重新登录');
        }
    }


    render() {
        const LoginForm = (
            <div className={styles.loginForm}>
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
            </div>

        )
        const { user } = this.state


        return (
            <div className={styles.lgContainer}>
                {user && (<Navigate to="/Home" replace="true"></Navigate>)}
                <div className={styles.container}>
                    {LoginForm}
                </div>

            </div>
        )
    }
}

export default Login
