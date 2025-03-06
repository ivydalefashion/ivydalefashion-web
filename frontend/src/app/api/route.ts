const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

export const API_ROUTES = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REGISTER: `${API_BASE_URL}/api/auth/register`,
  },
  COURSES: {
    GET_ALL: `${API_BASE_URL}/api/courses/getAll`,
    GET_ONE: (id: string) => `${API_BASE_URL}/api/courses/getOne?id=${id}`,
    CREATE: `${API_BASE_URL}/api/courses/create`,
    MY_COURSES: `${API_BASE_URL}/api/courses/mycourses`,
  },
  PRODUCTS: {
    GET_ALL: `${API_BASE_URL}/api/commerce/products/`,
  },
  INSTRUCTORS: {
    GET_ONE: (id: string) => `${API_BASE_URL}/api/instructors/${id}`,
    GET_ALL: `${API_BASE_URL}/api/instructors/getAll`,
  },
};
