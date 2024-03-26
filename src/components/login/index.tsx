'use client';
import React, { useContext, useEffect } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Checkbox, Form, Input } from 'antd';
import styles from './styles/login.module.scss';
import Link from 'next/link';
import { AuthStateContext, IAuthLogin } from '@/providers/authProvider/context';
import { AuthActionContext } from '@/providers/authProvider/context';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const { login } = useContext(AuthActionContext);
  const { error } = useContext(AuthStateContext);
  const router = useRouter();

  const ErrorLogin: React.FC = () => <Alert message="Invalid email or password" showIcon />;

  const onFinish = (values: any) => {
    const input: IAuthLogin = { password: values.password, userNameOrEmailAddress: values.email }
    // console.log('Received values of form: ', values);
    login(input).then((response) => {
      // navigate to login
       if(response.success) {
        // login is succesfull
        // navigate to login 
        router.push('/');
       }

    }).catch((error) =>{
      console.log("Login failed:", error);
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed to login:', errorInfo);
  }

  return (
    <div className={styles.container}> {/* Container to center the Login component */}
      <div className={styles.quote}>
        <blockquote>
          Every man who knows how to read has it in his power to magnify himself, to multiply the ways in which he exists, to make his life full, significant and interesting
          <footer>- Aldous Huxley</footer>
        </blockquote>
      </div>

      <div className={styles.formContainer}>

        <Form
          name="normal_login"
          className={styles.loginForm}
          initialValues={{ remember: true }}
          onFinish={onFinish} >
          <h2>Login</h2>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item> */}

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link href="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
