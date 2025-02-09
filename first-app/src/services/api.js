import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3000", // Try 127.0.0.1 instead of localhost
  headers: { "Content-Type": "application/json" },
});

export default {
  getAll() {
    return apiClient.get("/items");
  },
  getById(id) {
    return apiClient.get(`/items/${id}`);
  },
  create(data) {
    return apiClient.post("/items", data);
  },
  update(id, data) {
    return apiClient.patch(`/items/${id}`, data); // Fixed API_URL issue
  },
  delete(id) {
    return apiClient.delete(`/items/${id}`);
  }
};
