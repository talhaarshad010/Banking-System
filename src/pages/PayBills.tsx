import React, { useState } from 'react';
import { Receipt, AlertCircle, Search } from 'lucide-react';

export function PayBills() {
  const [selectedBill, setSelectedBill] = useState('');
  const [amount, setAmount] = useState('');
  const [fromAccount, setFromAccount] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const mockAccounts = [
    { id: '1', type: 'Checking', number: '**** 1234', balance: 5420.50 },
    { id: '2', type: 'Savings', number: '**** 5678', balance: 12750.75 }
  ];

  const mockBills = [
    { id: '1', name: 'Electricity Bill', company: 'Power Corp', amount: 145.30, dueDate: '2024-03-25' },
    { id: '2', name: 'Water Bill', company: 'City Water', amount: 75.50, dueDate: '2024-03-28' },
    { id: '3', name: 'Internet Bill', company: 'ISP Services', amount: 89.99, dueDate: '2024-03-30' },
    { id: '4', name: 'Phone Bill', company: 'Mobile Co', amount: 65.00, dueDate: '2024-04-01' }
  ];

  const filteredBills = mockBills.filter(bill =>
    bill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bill.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBillSelect = (billId: string) => {
    const bill = mockBills.find(b => b.id === billId);
    setSelectedBill(billId);
    if (bill) {
      setAmount(bill.amount.toString());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const paymentAmount = parseFloat(amount);
    if (isNaN(paymentAmount) || paymentAmount <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    const sourceAccount = mockAccounts.find(acc => acc.id === fromAccount);
    if (sourceAccount && sourceAccount.balance < paymentAmount) {
      setError('Insufficient funds');
      return;
    }

    // Mock successful payment
    setSuccess('Bill payment completed successfully');
    setAmount('');
    setSelectedBill('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Receipt className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Pay Bills</h1>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-4">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search bills..."
                  className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                {filteredBills.map(bill => (
                  <div
                    key={bill.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedBill === bill.id ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleBillSelect(bill.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{bill.name}</h3>
                        <p className="text-sm text-gray-500">{bill.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${bill.amount.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">Due: {bill.dueDate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
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

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                disabled={!selectedBill || !fromAccount}
              >
                Pay Bill
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}