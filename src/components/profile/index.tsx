'use client';
import React from 'react';
import styles from './styles/profile.module.scss';
import WithAuth from '../withAuth';

  // Sample user data
  const userData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    createdAt: '2024-03-18', // Sample date
  };


interface ProfileProps  {}
export const Profile: React.FC<ProfileProps> = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.left}>
          <div className={styles.leftContent}>
            <h3> Account details</h3>
            <ul>
              <p><span>Name:</span> {userData.name}</p>
              <p><span>Email:</span> {userData.email}</p>
              <p><span>Create at:</span> {userData.createdAt}</p>
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
