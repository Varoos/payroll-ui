import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://localhost:7048/api",
});

// Attach JWT to every request (like Angular HttpInterceptor)
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
