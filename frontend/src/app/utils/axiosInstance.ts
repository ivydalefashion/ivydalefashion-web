// utils/axiosInstance.js
import axios from 'axios';
import { API_ROUTES } from '../api/route';
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
        const res = await axiosInstance.get(API_ROUTES.CSRF.CSRF, {
            withCredentials: true, // Ensure cookies are sent
        });
        const csrfToken = res.data.csrfToken; // Adjust this based on your Django response
        axiosInstance.defaults.headers.common["X-CSRFToken"] = csrfToken;
        console.log("CSRF Token:", csrfToken);
        return csrfToken;
    } catch (err) {
        console.error("Failed to fetch CSRF token", err);
    }
};

  
getCsrfToken();

// export getCsrfToken;
export { axiosInstance, getCsrfToken};
