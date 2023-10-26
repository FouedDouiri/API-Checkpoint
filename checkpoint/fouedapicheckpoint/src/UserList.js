import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul className="user-list">
        {listOfUsers.map(user => (
          <li key={user.id} className="user-item">{user.name}and lives in {user.address.city}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
