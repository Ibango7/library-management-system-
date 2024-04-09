import React, { useState } from 'react';
import { List, Modal, Button } from 'antd';

// Define the User type
type User = {
  id: number;
  name: string;
};

const UsersList: React.FC = () => {
  // State to store the list of users
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ]);

  // State for the selected user
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // State for modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to handle user deletion
  const handleDeleteUser = (userId: number) => {
    // Filter out the user with the given ID
    const updatedUsers = users.filter(user => user.id !== userId);
    // Update the users state
    setUsers(updatedUsers);
    // Close the modal
    setIsModalVisible(false);
  };

  // Function to handle modal open
  const handleOpenModal = (user: User) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  // Function to handle modal close
  const handleCancel = () => {
    setSelectedUser(null);
    setIsModalVisible(false);
  };

  return (
    <div>
      <h2>Users List</h2>
      <List
        dataSource={users}
        renderItem={user => (
          <List.Item
            actions={[
              <Button type="primary" onClick={() => handleOpenModal(user)}>Delete</Button>,
            ]}
          >
            {user.name}
          </List.Item>
        )}
      />
      <Modal
        title="Confirm Delete"
        visible={isModalVisible}
        onOk={() => handleDeleteUser(selectedUser!.id)}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to delete {selectedUser?.name}?</p>
      </Modal>
    </div>
  );
};

export default UsersList;
