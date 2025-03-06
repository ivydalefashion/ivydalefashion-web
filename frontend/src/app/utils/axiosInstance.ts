// utils/axiosInstance.js
import axios from 'axios';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000';

const axiosInstance = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10000,
    withCredentials: true, // Needed to send cookies
	headers: {
		'Content-Type': 'application/json',
		// Any other default headers
	},
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

// Function to fetch CSRF token from cookies:
const getCsrfToken = async () => {
    try {
      const res = await axiosInstance.get("/api/csrf/");
      const csrfToken = res.data.csrfToken;
      axiosInstance.defaults.headers.common["X-CSRFToken"] = csrfToken; // Attach CSRF token
    } catch (err) {
      console.error("Failed to fetch CSRF token", err);
    }
};
  
getCsrfToken();

export default axiosInstance;
