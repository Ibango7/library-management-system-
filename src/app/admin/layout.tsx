'use client';
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  BookOutlined,
  LogoutOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Admin: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="2" icon={<BookOutlined />}>
            Books
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Admins">
            <Menu.Item key="3">Add Admin</Menu.Item>
            <Menu.Item key="4">Manage Admins</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/* Your admin content goes here */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Library Management System ©2024</Footer>
      </Layout>
    </Layout>
  );
}

export default Admin;
