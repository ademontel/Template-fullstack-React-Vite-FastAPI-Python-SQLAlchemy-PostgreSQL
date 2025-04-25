import dispatcher from './dispatcher';

const API_URL = 'http://localhost:8000';

export function fetchUsers() {
  fetch(`${API_URL}/users`)
    .then(res => res.json())
    .then(data => {
      dispatcher.dispatch({ type: 'FETCH_USERS', payload: data });
    });
}

export function addUser(user) {
  fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(newUser => {
      dispatcher.dispatch({ type: 'ADD_USER', payload: newUser });
    });
}

export function updateUser(id, user) {
  fetch(`${API_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(updated => {
      dispatcher.dispatch({ type: 'UPDATE_USER', payload: updated });
    });
}

export function deleteUser(id) {
  fetch(`${API_URL}/users/${id}`, {
    method: 'DELETE'
  }).then(() => {
    dispatcher.dispatch({ type: 'DELETE_USER', payload: id });
  });
}