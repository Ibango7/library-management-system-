'use client';
import React, { useEffect, useContext } from 'react';
import { Card, Row, Col, Typography, Divider, List } from 'antd';
import { UserOutlined, MailOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './styles/profile.module.scss';
import WithAuth from '../withAuth';
import { IUser, UserStateContext, UserActionContext } from '@/providers/userProfileProvider/context';

const { Title, Text } = Typography;

// Mock data for history
const historyData = [
  { title: 'Book Title 1', author: 'Author 1', dateBorrowed: '2023-03-15', dateReturned: '2023-04-02' },
  { title: 'Book Title 2', author: 'Author 2', dateBorrowed: '2023-04-05', dateReturned: '2023-04-20' },
  { title: 'Book Title 1', author: 'Author 1', dateBorrowed: '2023-03-15', dateReturned: '2023-04-02' },
  { title: 'Book Title 2', author: 'Author 2', dateBorrowed: '2023-04-05', dateReturned: '2023-04-20' },
  { title: 'Book Title 1', author: 'Author 1', dateBorrowed: '2023-03-15', dateReturned: '2023-04-02' },
  { title: 'Book Title 2', author: 'Author 2', dateBorrowed: '2023-04-05', dateReturned: '2023-04-20' },

];

interface ProfileProps {}
export const Profile: React.FC<ProfileProps> = () => {
  const { getUserInfo } = useContext(UserActionContext);
  const { userInfo } = useContext(UserStateContext);

  useEffect(() => {
    const handleUserInfo = () => {
      const tempUser = localStorage.getItem('userDetails');
      if (tempUser) {
        const userInfo: IUser = JSON.parse(tempUser);
        getUserInfo(userInfo);
      } else {
        const tempId = localStorage.getItem('userId');
        if (tempId) {
          const id: IUser = { id: JSON.parse(tempId) };
          getUserInfo(id);
        }
      }
    };
    handleUserInfo();
  }, []);

  return (
    <div className={styles.profileContainer}>
      <Card className={styles.left} title="Account Details">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <UserOutlined />
            <Text>Name: {userInfo?.name} {userInfo?.surname}</Text>
          </Col>
          <Col span={24}>
            <UserOutlined />
            <Text>UserName: {userInfo?.userName}</Text>
          </Col>
          <Col span={24}>
            <MailOutlined />
            <Text>Email: {userInfo?.emailAddress}</Text>
          </Col>
          <Col span={24}>
            <DeleteOutlined />
            <Text>Delete Account</Text>
          </Col>
        </Row>
      </Card>
      <Card className={styles.right} title="History">
        <div className={styles.scrollableHistory}>
          <List
            itemLayout="vertical"
            dataSource={historyData}
            renderItem={(item) => (
              <List.Item key={item.title}>
                <div>
                  <Text strong>{item.title}</Text>
                  <Divider type="vertical" />
                  <Text>{item.author}</Text>
                  <Divider type="vertical" />
                  <Text>Date Borrowed: {item.dateBorrowed}</Text>
                  <Divider type="vertical" />
                  {item.dateReturned ? (
                    <Text>Date Returned: {item.dateReturned}</Text>
                  ) : (
                    <Text type="danger">Outstanding</Text>
                  )}
                </div>
              </List.Item>
            )}
          />
        </div>
      </Card>
    </div>
  );
};

export default WithAuth(Profile);
