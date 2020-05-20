import axios from "axios";
import { API_URL } from "../../Constants";

class TodoDataService {
  retrieveAllTodos(name) {
    return axios.get(`${API_URL}/users/${name}/todos`);
  }

  retrieveTodo(name, id) {
    return axios.get(`${API_URL}/users/${name}/todos/${id}`);
  }

  deleteTodo(name, id) {
    return axios.delete(`${API_URL}/users/${name}/todos/${id}`);
  }

  updateTodo(name, id, todo) {
    console.log(name);
    return axios.put(`${API_URL}/users/${name}/todos/${id}`, todo);
  }

  createTodo(name, todo) {
    return axios.post(`${API_URL}/users/${name}/todos/`, todo);
  }
}

export default new TodoDataService();
