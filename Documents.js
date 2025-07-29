import React from 'react';

const Documents = () => {
  return (
    <div className="space-y-6">
      <div className="card">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Document Management</h1>
        <p className="text-gray-600">
          This is where users can upload, view, and manage their legal documents.
        </p>
        <p className="text-gray-600 mt-2">
          Features include:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
          <li>PDF and image document upload</li>
          <li>OCR text extraction</li>
          <li>AI-powered document analysis</li>
          <li>Risk assessment and recommendations</li>
          <li>Document comparison</li>
          <li>Search and filtering</li>
        </ul>
      </div>
    </div>
  );
};

export default Documents; 