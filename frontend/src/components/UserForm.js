import React, { useState } from 'react';
import { addUser } from '../flux/actions';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    
    if (!name || !email || !password) {
      setError('Todos los campos son requeridos');
      return;
    }

    if (password.length < 6) {
      setError('El password debe tener al menos 6 caracteres');
      return;
    }

    if(!/\S+@\S+\.\S+/.test(email)) {
      setError('El email no es válido');
      return;
    }

    addUser({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col">
          <input className="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="col">
          <input className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="col">
          <input 
            type="password"
            className="form-control" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" type="submit">Add User</button>
        </div>
      </div>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </form>
  );
}

export default UserForm;