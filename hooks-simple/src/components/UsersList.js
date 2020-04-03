import React from 'react';
import useResources from './useResources';

//Example for code Reuse
const UsersList = () => {
  const users = useResources('users');

  return (
    <div>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>{user.name}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
