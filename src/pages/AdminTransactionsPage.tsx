export function AdminTransactionsPage() {
    const transactions = [
      { id: 1, date: "2025-04-25", amount: 250.0, type: "Deposit", method: "Bank Transfer" },
      { id: 2, date: "2025-04-25", amount: -100.5, type: "Withdrawal", method: "ATM" },
      { id: 3, date: "2025-04-24", amount: 500.0, type: "Deposit", method: "Mobile App" },
    ];
  
    return (
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">All Transactions</h1>
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Method</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{tx.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{tx.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{tx.method}</td>
                  <td className={`px-6 py-4 whitespace-nowrap ${tx.amount < 0 ? "text-red-500" : "text-green-600"}`}>
                    ${Math.abs(tx.amount).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }