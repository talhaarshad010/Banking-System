import  { useState } from 'react';
import { Search, Filter, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { mockTransactions } from '../utils/userTransactions';
export function Transactions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // const mockTransactions = [
  //   {
  //     id: 1,
  //     type: 'deposit',
  //     amount: 1500.00,
  //     description: 'Salary deposit',
  //     date: '2024-03-15 09:30',
  //     status: 'completed',
  //     account: '**** 1234'
  //   },
  //   {
  //     id: 2,
  //     type: 'withdrawal',
  //     amount: 500.00,
  //     description: 'ATM withdrawal',
  //     date: '2024-03-14 15:45',
  //     status: 'completed',
  //     account: '**** 1234'
  //   },
  //   {
  //     id: 3,
  //     type: 'transfer',
  //     amount: 750.00,
  //     description: 'Transfer to savings',
  //     date: '2024-03-13 11:20',
  //     status: 'completed',
  //     account: '**** 5678'
  //   }
  // ];

  const filteredTransactions = mockTransactions.filter(transaction =>
    (filterType === 'all' || transaction.type === filterType) &&
    (transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
     transaction.account.includes(searchTerm))
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              <option value="deposit">Deposits</option>
              <option value="withdrawal">Withdrawals</option>
              <option value="transfer">Transfers</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Account</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {transaction.type === 'deposit' ? (
                      <ArrowDownLeft className="h-5 w-5 text-green-600 mr-2" />
                    ) : transaction.type === 'withdrawal' ? (
                      <ArrowUpRight className="h-5 w-5 text-red-600 mr-2" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-blue-600 mr-2" />
                    )}
                    <span className="capitalize">{transaction.type}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={transaction.type === 'deposit' ? 'text-green-600' : 'text-red-600'}>
                    ${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.account}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                    transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}