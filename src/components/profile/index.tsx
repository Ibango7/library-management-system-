'use client';
import React, { useEffect, useContext, useState } from 'react';
import { Card, Row, Col, Typography, Divider, List, TabsProps, Tabs } from 'antd';
import { UserOutlined, MailOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './styles/profile.module.scss';
import WithAuth from '../withAuth';
import { IUser, UserStateContext, UserActionContext } from '@/providers/userProfileProvider/context';
const { Title, Text } = Typography;

interface ProfileProps { }
interface IUserActivity_ {
  author: string;
  bookTitle: string;
  bookId: string;
  dateBorrowed: string;
  returned: false;
  overdue: false;
}
export const Profile: React.FC<ProfileProps> = () => {
  const [userActivity, setUserActivity] = useState<IUserActivity_[]>([]);
  const { getUserInfo, getUserActivity } = useContext(UserActionContext);
  const { userInfo } = useContext(UserStateContext);
  const [returnedBooks, setReturnedBooks] = useState<IUserActivity_[]>([]);
  const [overdueBooks, setOverdueBooks] = useState<IUserActivity_[]>([]);
  const [possessedBooks, setPossessedBooks] = useState<IUserActivity_[]>([]);


  useEffect(() => {
    const handleUserInfo = () => {
      const tempUser = localStorage.getItem('userDetails');
      if (tempUser) {
        const userInfo: IUser = JSON.parse(tempUser);
        getUserInfo(userInfo);
        handleGetUserActivity(userInfo.id);

      } else {
        const tempId = localStorage.getItem('userId');
        if (tempId) {
          const id: IUser = { id: JSON.parse(tempId) };
          getUserInfo(id);

          // get user activity here
          const temp = parseInt(tempId);
          handleGetUserActivity(temp);
        }
      }
    };
    handleUserInfo();
  }, []);

  const handleGetUserActivity = async (id: number | undefined) => {
    // get user activity as well
    if (getUserActivity) {
      try {
        if (id) {
          const response = await getUserActivity(id);
          // console.log("Response in user profile activity", response.result);
          setUserActivity(response.result);
          // Filter user activity based on conditions for each tab
          setReturnedBooks(response.result.filter((item: IUserActivity_) => item.returned));
          setOverdueBooks(response.result.filter((item: IUserActivity_) => item.overdue));
          setPossessedBooks(response.result.filter((item: IUserActivity_) => !item.returned && !item.overdue));
        }
      } catch (error) {
        console.log("Error feching user Activity", error);
      }
    }
  }

  const onChange = (key: string) => {

    switch (key) {
      case '1':
        console.log(key);
        break;
      case '2':
        console.log(key);
        break;
      case '3':
        console.log(key);
        break;
      default:
        console.log("TTTT");
        break;
    }

  };

  return (
    <>
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
      </div>
      <div className={styles.profileContainer}>
        <Card className={styles.right} title="My Activities">
          <div className="{styles.scrollableHistory}">
            <Tabs defaultActiveKey='1' onChange={onChange}>
              {/* Render information for each tab */}

              <Tabs.TabPane tab="Returned Books" key="1">
                <List
                  dataSource={returnedBooks}
                  renderItem={item => (
                    <List.Item>
                      <Typography.Text>{item.bookTitle}</Typography.Text>
                    </List.Item>
                  )}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Overdue Books" key="2">
                <List
                  dataSource={overdueBooks}
                  renderItem={item => (
                    <List.Item>
                      <Typography.Text>{item.bookTitle}</Typography.Text>
                    </List.Item>
                  )}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Currently in possession" key="3">
                <List
                  dataSource={possessedBooks}
                  renderItem={item => (
                    <List.Item>
                      <Typography.Text>{item.bookTitle}</Typography.Text>
                    </List.Item>
                  )}
                />
              </Tabs.TabPane>
            </Tabs>
          </div>
        </Card>
      </div>
    </>
  );
};

export default WithAuth(Profile);
