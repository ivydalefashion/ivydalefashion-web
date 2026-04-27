const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export const API_ROUTES = {
	AUTH: {
		LOGIN: `${API_BASE_URL}/api/auth/login`,
		REGISTER: `${API_BASE_URL}/api/auth/register`,
	},
	CSRF: {
		CSRF: `${API_BASE_URL}/api/csrf`
	},
	COURSES: {
		GET_ALL: `${API_BASE_URL}/api/courses/getAll`,
		GET_ONE: (id: string) => `${API_BASE_URL}/api/courses/getOne?id=${id}`,
		CREATE: `${API_BASE_URL}/api/courses/create`,
		MY_COURSES: `${API_BASE_URL}/api/courses/mycourses`,
	},
	PRODUCTS: {
		GET_ALL: `${API_BASE_URL}/api/product`,
	},
	CATEGORIES: {
		GET_ALL: `${API_BASE_URL}/api/categories`,
	},
	BRANDS: {
		GET_ALL: `${API_BASE_URL}/api/brands`,
	},
	INSTRUCTORS: {
		GET_ONE: (id: string) => `${API_BASE_URL}/api/instructors/${id}`,
		GET_ALL: `${API_BASE_URL}/api/instructors/getAll`,
	},
};
