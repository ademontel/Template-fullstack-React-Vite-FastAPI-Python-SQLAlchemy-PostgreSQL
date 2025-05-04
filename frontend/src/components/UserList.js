import React, { useEffect, useState } from 'react';
import UserStore from '../flux/store';
import { fetchUsers, deleteUser } from '../flux/actions';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserStore.on('change', () => {
      setUsers(UserStore.getUsers());
    });
    fetchUsers();
    return () => UserStore.removeAllListeners();
  }, []);

  return (
    <table className="table mt-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.password}</td>
            <td>
              <button className="btn btn-danger btn-sm" onClick={() => deleteUser(u.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;