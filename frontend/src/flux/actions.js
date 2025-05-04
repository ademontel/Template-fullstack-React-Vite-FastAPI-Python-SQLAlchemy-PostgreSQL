import dispatcher from './dispatcher';

const API_URL = 'http://localhost:8000';

export function fetchUsers() {
  fetch(`${API_URL}/users`)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      dispatcher.dispatch({ type: 'FETCH_USERS', payload: data });
    })
    .catch(err => console.error("Fetch error:", err));
}

export function addUser(user) {
  fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(errorData => {
          const errorMessage = errorData.detail || 
            (Array.isArray(errorData) ? errorData[0].msg : "Error adding user");
          throw new Error(errorMessage);
        });
      }
      return res.json();
    })
    .then(newUser => {
      dispatcher.dispatch({ type: 'ADD_USER', payload: newUser });
      // Refrescar la lista completa de usuarios
      fetchUsers();
    })
    .catch(err => {
      console.error("Add user error:", err.message);
      alert(err.message);
    });
}

export function updateUser(id, user) {
  fetch(`${API_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(errorData => {
          console.error("Validation error:", errorData);
          throw new Error(errorData.detail || "Error updating user");
        });
      }
      return res.json();
    })
    .then(updated => {
      dispatcher.dispatch({ type: 'UPDATE_USER', payload: updated });
    })
    .catch(err => {
      console.error("Update user error:", err.message);
      alert("Error updating user: " + err.message);
    });
}

export function deleteUser(id) {
  fetch(`${API_URL}/users/${id}`, {
    method: 'DELETE'
  }).then(() => {
    dispatcher.dispatch({ type: 'DELETE_USER', payload: id });
  });
}