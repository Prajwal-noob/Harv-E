import api from './api';

export const chatService = {
  // Get all chat sessions
  getChats: async (params = {}) => {
    const response = await api.get('/chat', { params });
    return response.data;
  },

  // Get specific chat session
  getChat: async (chatId) => {
    const response = await api.get(`/chat/${chatId}`);
    return response.data.chat;
  },

  // Create new chat session
  createChat: async (chatData) => {
    const response = await api.post('/chat', chatData);
    return response.data.chat;
  },

  // Send message in chat
  sendMessage: async (chatId, message) => {
    const response = await api.post(`/chat/${chatId}/message`, message);
    return response.data;
  },

  // Analyze document in chat context
  analyzeDocument: async (chatId, documentData) => {
    const response = await api.post(`/chat/${chatId}/analyze-document`, documentData);
    return response.data;
  },

  // Compare clauses in chat
  compareClauses: async (chatId, clauseData) => {
    const response = await api.post(`/chat/${chatId}/compare-clauses`, clauseData);
    return response.data;
  },

  // Update chat session
  updateChat: async (chatId, updateData) => {
    const response = await api.put(`/chat/${chatId}`, updateData);
    return response.data.chat;
  },

  // Delete chat session
  deleteChat: async (chatId) => {
    const response = await api.delete(`/chat/${chatId}`);
    return response.data;
  }
}; 