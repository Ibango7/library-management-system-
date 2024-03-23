import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './styles/register.module.scss';

const Register: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  
  return (
    <div className={styles.container}>
      <Form
        name="register"
        onFinish={onFinish}
        className={styles.registerForm}
        initialValues={{ remember: true }}
      >
        <h3> Register Account</h3>
        <Form.Item
          name="email"
          rules={[{ type: 'email', message: 'Please enter a valid email!' }, { required: true, message: 'Please enter your email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="surname"
          rules={[{ required: true, message: 'Please enter your surname!' }]}
        >
          <Input placeholder="Surname" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
