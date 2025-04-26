import React, { useState } from 'react';
import { ArrowRightLeft, AlertCircle } from 'lucide-react';

export function TransferMoney() {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const mockAccounts = [
    { id: '1', type: 'Checking', number: '**** 1234', balance: 5420.50 },
    { id: '2', type: 'Savings', number: '**** 5678', balance: 12750.75 },
    { id: '3', type: 'Credit', number: '**** 9012', balance: -1250.25 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (fromAccount === toAccount) {
      setError('Cannot transfer to the same account');
      return;
    }

    const transferAmount = parseFloat(amount);
    if (isNaN(transferAmount) || transferAmount <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    const sourceAccount = mockAccounts.find(acc => acc.id === fromAccount);
    if (sourceAccount && sourceAccount.balance < transferAmount) {
      setError('Insufficient funds');
      return;
    }

    // Mock successful transfer
    setSuccess('Transfer completed successfully');
    setAmount('');
    setDescription('');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-3 mb-6">
          <ArrowRightLeft className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Transfer Money</h1>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center space-x-2 text-red-700">
            <AlertCircle className="h-5 w-5" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">From Account</label>
            <select
              value={fromAccount}
              onChange={(e) => setFromAccount(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="">Select account</option>
              {mockAccounts.map(account => (
                <option key={account.id} value={account.id}>
                  {account.type} - {account.number} (${account.balance.toFixed(2)})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To Account</label>
            <select
              value={toAccount}
              onChange={(e) => setToAccount(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="">Select account</option>
              {mockAccounts.map(account => (
                <option key={account.id} value={account.id}>
                  {account.type} - {account.number}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-gray-300 rounded-md pl-8 pr-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter description"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Transfer Money
          </button>
        </form>
      </div>
    </div>
  );
}