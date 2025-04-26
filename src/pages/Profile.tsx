import React, { useState } from 'react';
import { User, Settings, Shield, Key, Mail, Phone, MapPin } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export function Profile() {
  const { user } = useAuthStore();
  const isAdmin = user?.role === 'admin';
  const [isEditing, setIsEditing] = useState(false);

  const mockUserDetails = {
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, City, State 12345',
    role: user?.role || 'customer',
    joinDate: '2024-01-15',
    lastPasswordChange: '2024-02-20',
    twoFactorEnabled: true,
    loginHistory: [
      { date: '2024-03-10 14:30:00', location: 'New York, USA', device: 'Chrome / Windows' },
      { date: '2024-03-09 09:15:00', location: 'New York, USA', device: 'Safari / iOS' },
      { date: '2024-03-08 17:45:00', location: 'New York, USA', device: 'Firefox / macOS' },
    ]
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600" />
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  defaultValue={mockUserDetails.firstName}
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  defaultValue={mockUserDetails.lastName}
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  defaultValue={mockUserDetails.email}
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  defaultValue={mockUserDetails.phone}
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                defaultValue={mockUserDetails.address}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>
          </div>

          {/* Account Security */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Account Security
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">Two-Factor Authentication</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  mockUserDetails.twoFactorEnabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {mockUserDetails.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium">Last Password Change</span>
                </div>
                <span className="text-sm text-gray-600">{mockUserDetails.lastPasswordChange}</span>
              </div>
            </div>
          </div>

          {/* Login History */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Recent Login Activity</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Device</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockUserDetails.loginHistory.map((login, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{login.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{login.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{login.device}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}