import {USERS_URL} from '../config';
import {get,post} from '../utility';
//import UserDetails from '../models/userDetails'
class UserService {
  getAll() {
    return get(USERS_URL);
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new UserService();

// class UserService {
//     constructor() {
//       this.baseUrl = USERS_URL;
//     }
  
//     async getAllUsers() {
//       const response = await get(USERS_URL);
//       const data = await response.json();
//       //return data.map(user => new UserDetails(user.id, user.firstName, user.lastName, user.email));
//     }
  
//     async getUserById(id) {
//       const response = await fetch(`${this.baseUrl}/${id}`);
//       const data = await response.json();
//       //return new UserDetails(data.id, data.firstName, data.lastName, data.email);
//     }
  
//     async createUser(user) {
//       const response = await fetch(this.baseUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//       });
//       const data = await response.json();
//       //return new UserDetails(data.id, data.firstName, data.lastName, data.email);
//     }
  
//     async updateUser(user) {
//       const response = await fetch(`${this.baseUrl}/${user.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//       });
//       const data = await response.json();
//       //return new UserDetails(data.id, data.firstName, data.lastName, data.email);
//     }
  
//     async deleteUser(id) {
//       const response = await fetch(`${this.baseUrl}/${id}`, {
//         method: 'DELETE'
//       });
//       return response.ok;
//     }
//   }
  
  //export default new UserService();