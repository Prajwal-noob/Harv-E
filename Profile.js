import React from 'react';

const Profile = () => {
  return (
    <div className="space-y-6">
      <div className="card">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">User Profile</h1>
        <p className="text-gray-600">
          This is where users can view and manage their profile information and preferences.
        </p>
        <p className="text-gray-600 mt-2">
          Features include:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
          <li>Profile information management</li>
          <li>Password change</li>
          <li>Account preferences</li>
          <li>Activity statistics</li>
          <li>Data export</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile; 