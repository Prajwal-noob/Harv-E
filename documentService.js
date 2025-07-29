import api from './api';

export const documentService = {
  // Upload document
  uploadDocument: async (file, chatId = null, documentType = 'contract') => {
    const formData = new FormData();
    formData.append('document', file);
    if (chatId) formData.append('chatId', chatId);
    formData.append('documentType', documentType);

    const response = await api.post('/documents/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Get all documents
  getDocuments: async (params = {}) => {
    const response = await api.get('/documents', { params });
    return response.data;
  },

  // Get specific document
  getDocument: async (documentId) => {
    const response = await api.get(`/documents/${documentId}`);
    return response.data.document;
  },

  // Reanalyze document
  reanalyzeDocument: async (documentId, documentType = 'contract') => {
    const response = await api.post(`/documents/${documentId}/reanalyze`, {
      documentType
    });
    return response.data;
  },

  // Delete document
  deleteDocument: async (documentId) => {
    const response = await api.delete(`/documents/${documentId}`);
    return response.data;
  },

  // Compare two documents
  compareDocuments: async (document1Id, document2Id) => {
    const response = await api.post('/documents/compare', {
      document1Id,
      document2Id
    });
    return response.data;
  }
}; 