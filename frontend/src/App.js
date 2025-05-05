import React from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  return (
    <div className="container mt-5">
      <h1>User CRUD HOLA</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;