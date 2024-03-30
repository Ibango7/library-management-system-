'use client';
import React, {useEffect, useContext} from 'react';
import styles from './styles/profile.module.scss';
import WithAuth from '../withAuth';
import {IUser, UserStateContext,  UserActionContext} from '@/providers/userProfileProvider/context';

interface ProfileProps  {}
export const Profile: React.FC<ProfileProps> = () => {
  const {getUserInfo} = useContext(UserActionContext);
  const {userInfo} = useContext(UserStateContext);

  useEffect(() => {
        const handleUserInfo = () =>{
          const tempUser = localStorage.getItem('userDetails');
          if(tempUser){
            const userInfo: IUser = JSON.parse(tempUser)
            getUserInfo(userInfo);
          }else {
            const tempId = localStorage.getItem('userId');
            if(tempId){
              const id :IUser = {id: JSON.parse(tempId)}
              getUserInfo(id);
            }
          }
        }

        handleUserInfo();
  },[]);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.left}>
          <div className={styles.leftContent}>
            <h3> Account details</h3>
            <ul>
              <p><span>Name:</span> {userInfo?.name}</p>
              <p><span>Email:</span> {userInfo?.emailAddress}</p>
              <p><span>UserName:</span> {userInfo?.surname}</p>
              <p><span>Delete Account</span></p>
            </ul>
          </div>
      </div>
      <div  className={styles.rightContent}>
        <h3> History</h3>
        <div>

        </div>
      </div>
       
    </div>
  )
}

export default WithAuth(Profile)
