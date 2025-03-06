// utils/axiosInstance.js

// ill set this up later:::


import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.yourdomain.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // Any other default headers
  }
});

// Add request interceptor for auth tokens
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized or other common errors
    if (error.response && error.response.status === 401) {
      // Redirect to login or refresh token
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;