import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, ArrowRightLeft, Clock,  Users, Receipt, Search } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export function Dashboard() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const isAdmin = user?.role === 'admin';

  const accounts = [
    { type: 'Checking', balance: 5420.50, number: '**** 1234' },
    { type: 'Savings', balance: 12750.75, number: '**** 5678' },
    { type: 'Credit', balance: -1250.25, number: '**** 9012' }
  ];

  const recentTransactions = [
    { id: 1, description: 'Grocery Store', amount: -82.50, date: '2024-03-10' },
    { id: 2, description: 'Salary Deposit', amount: 3500.00, date: '2024-03-08' },
    { id: 3, description: 'Electric Bill', amount: -145.30, date: '2024-03-07' }
  ];

  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', accountType: 'Personal', status: 'Active', lastLogin: '2024-03-10 14:30' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', accountType: 'Business', status: 'Active', lastLogin: '2024-03-10 12:15' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', accountType: 'Personal', status: 'Inactive', lastLogin: '2024-03-09 09:45' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', accountType: 'Business', status: 'Active', lastLogin: '2024-03-10 16:20' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', accountType: 'Personal', status: 'Active', lastLogin: '2024-03-10 11:05' }
  ];

  const mockTransactions = [
    { id: 1, user: 'John Doe', type: 'Transfer', amount: 1500.00, status: 'Completed', date: '2024-03-10 14:30' },
    { id: 2, user: 'Jane Smith', type: 'Withdrawal', amount: 500.00, status: 'Completed', date: '2024-03-10 12:15' },
    { id: 3, user: 'Bob Wilson', type: 'Deposit', amount: 2000.00, status: 'Pending', date: '2024-03-09 09:45' },
    { id: 4, user: 'Alice Brown', type: 'Transfer', amount: 750.00, status: 'Completed', date: '2024-03-10 16:20' },
    { id: 5, user: 'Charlie Davis', type: 'Withdrawal', amount: 300.00, status: 'Failed', date: '2024-03-10 11:05' }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTransferClick = () => {
    navigate('/transfer');
  };

  const handlePayBillsClick = () => {
    navigate('/pay-bills');
  };

  const AdminDashboard = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6" onClick={()=> navigate("/admin/users")} >
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold">Total Users</h3>
          </div>
          <p className="text-2xl font-bold">1,234</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6" onClick={()=> navigate("/admin/accounts")}>
          <div className="flex items-center space-x-3 mb-4">
            <CreditCard className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold">Active Accounts</h3>
          </div>
          <p className="text-2xl font-bold">3,456</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6" onClick={()=> navigate("/admin/transactions")}>
          <div className="flex items-center space-x-3 mb-4">
            <ArrowRightLeft className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold">Daily Transactions</h3>
          </div>
          <p className="text-2xl font-bold">789</p>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">User Management</h2>
            <div className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                className="border rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.accountType}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.lastLogin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const UserDashboard = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.firstName}!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {accounts.map((account) => (
          <div key={account.number} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold">{account.type}</h3>
              </div>
              <span className="text-sm text-gray-500">{account.number}</span>
            </div>
            <p className="text-2xl font-bold">
              ${Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-gray-500">Available Balance</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
            <Clock className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <span className={`font-semibold ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.amount >= 0 ? '+' : '-'}${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Quick Actions</h2>
            <ArrowRightLeft className="h-5 w-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleTransferClick}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowRightLeft className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <span className="block text-sm font-medium">Transfer Money</span>
            </button>
            <button
              onClick={handlePayBillsClick}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Receipt className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <span className="block text-sm font-medium">Pay Bills</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return isAdmin ? <AdminDashboard /> : <UserDashboard />;
}