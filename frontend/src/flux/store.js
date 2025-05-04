import { EventEmitter } from 'events';
import dispatcher from './dispatcher';

class UserStore extends EventEmitter {
  constructor() {
    super();
    this.users = [];
    dispatcher.register(this.handleActions.bind(this));
  }

  handleActions(action) {
    switch(action.type) {
      case 'FETCH_USERS':
        this.users = action.payload;
        this.emit('change');
        break;
      case 'ADD_USER':
        this.users.push(action.payload);
        this.emit('change');
        break;
      case 'UPDATE_USER':
        this.users = this.users.map(u => u.id === action.payload.id ? action.payload : u);
        this.emit('change');
        break;
      case 'DELETE_USER':
        this.users = this.users.filter(u => u.id !== action.payload);
        this.emit('change');
        break;
      default:
        break;
    }
  }

  getUsers() {
    return this.users;
  }
}

export default new UserStore();