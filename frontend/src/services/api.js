import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (name, email, password) => api.post('/auth/register', { name, email, password }),
  logout: () => api.post('/auth/logout'),
  getMe: () => api.get('/auth/me'),
  updateProfile: (data) => api.put('/auth/profile', data),
  changePassword: (currentPassword, newPassword) => 
    api.put('/auth/change-password', { currentPassword, newPassword }),
};

// Portfolio API
export const portfolioAPI = {
  getProjects: (params = {}) => api.get('/portfolio/projects', { params }),
  getProject: (id) => api.get(`/portfolio/projects/${id}`),
  getFeaturedProjects: () => api.get('/portfolio/featured'),
  getCategories: () => api.get('/portfolio/categories'),
  searchProjects: (query, params = {}) => 
    api.get('/portfolio/search', { params: { q: query, ...params } }),
  
  // Admin only
  createProject: (data) => api.post('/portfolio/projects', data),
  updateProject: (id, data) => api.put(`/portfolio/projects/${id}`, data),
  deleteProject: (id) => api.delete(`/portfolio/projects/${id}`),
};

// Contact API
export const contactAPI = {
  sendMessage: (data) => api.post('/contact', data),
  
  // Admin only
  getMessages: (params = {}) => api.get('/contact', { params }),
  getMessage: (id) => api.get(`/contact/${id}`),
  updateMessageStatus: (id, status) => api.put(`/contact/${id}/status`, { status }),
  deleteMessage: (id) => api.delete(`/contact/${id}`),
  getStats: () => api.get('/contact/stats/overview'),
};

// Health check
export const healthAPI = {
  check: () => api.get('/health'),
};

export default api;