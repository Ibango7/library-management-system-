'use client';
import React, { useEffect, useContext, useState } from 'react';
import { Card, Row, Col, Typography, Divider, List } from 'antd';
import { UserOutlined, MailOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './styles/profile.module.scss';
import WithAuth from '../withAuth';
import { IUser, IUserActivity, UserStateContext, UserActionContext } from '@/providers/userProfileProvider/context';

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
  const [userActivity, setUserActivity] = useState<IUserActivity[]>([]);
  const { getUserInfo, getUserActivity } = useContext(UserActionContext);
  const { userInfo } = useContext(UserStateContext);


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

  const handleGetUserActivity =  async(id:number| undefined) =>{
       // get user activity as well
       if(getUserActivity) {
        try {
          if(id){
            const response = await getUserActivity(id);
            console.log("Response in user profile activity", response.result);
            setUserActivity(response.result)
          }
        } catch(error){
          console.log("Error feching user Activity",error);
        }
      }
  }

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
      <Card className={styles.right} title="My Activities">
        <div className={styles.scrollableHistory}>
          <List
            itemLayout="vertical"
            dataSource={userActivity}
            renderItem={(item) => (
              <List.Item key={item.bookId}>
                <div>
                  <Text strong>{item.bookId}</Text>
                  <Divider type="vertical" />
                  <Text>{item.bookId}</Text>
                  <Divider type="vertical" />
                  <Text>Date Borrowed: {item.dateBorrowed}</Text>
                  <Divider type="vertical" />
                  {item.returned ? (
                    <Text> Not yet</Text>
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
