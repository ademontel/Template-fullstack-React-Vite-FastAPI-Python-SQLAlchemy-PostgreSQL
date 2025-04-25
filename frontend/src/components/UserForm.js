import React, { useState } from 'react';
import { addUser } from '../flux/actions';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email) return;
    addUser({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <input className="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="col">
          <input className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" type="submit">Add User</button>
        </div>
      </div>
    </form>;
}

export default UserForm;