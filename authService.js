import api from './api';

export const authService = {
  // Login user
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  // Register user
  register: async (name, email, password) => {
    const response = await api.post('/auth/register', { name, email, password });
    return response.data;
  },

  // Get user profile
  getProfile: async () => {
    const response = await api.get('/auth/me');
    return response.data.user;
  },

  // Update user profile
  updateProfile: async (profileData) => {
    const response = await api.put('/auth/profile', profileData);
    return response.data.user;
  },

  // Change password
  changePassword: async (currentPassword, newPassword) => {
    const response = await api.post('/auth/change-password', {
      currentPassword,
      newPassword
    });
    return response.data;
  },

  // Refresh token
  refreshToken: async () => {
    const response = await api.post('/auth/refresh-token');
    return response.data;
  }
}; 