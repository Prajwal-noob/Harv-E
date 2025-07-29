import React from 'react';

const Chat = () => {
  return (
    <div className="space-y-6">
      <div className="card">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Chat Interface</h1>
        <p className="text-gray-600">
          This is where users can interact with the AI legal assistant, upload documents, and get legal advice.
        </p>
        <p className="text-gray-600 mt-2">
          Features include:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
          <li>Natural language legal consultation</li>
          <li>Document upload and analysis</li>
          <li>Clause comparison</li>
          <li>Chat history management</li>
          <li>Legal reference suggestions</li>
        </ul>
      </div>
    </div>
  );
};

export default Chat; 