import { mockTransactions } from "../utils/userTransactions";

export function AdminTransactionsPage() {
  const transactions = [
    { id: 1, date: "2025-04-25", amount: 250.0, type: "Deposit", method: "Bank Transfer" },
    { id: 2, date: "2025-04-25", amount: -100.5, type: "Withdrawal", method: "ATM" },
    { id: 3, date: "2025-04-24", amount: 500.0, type: "Deposit", method: "Mobile App" },
    { id: 4, date: "2025-04-23", amount: -150.0, type: "Withdrawal", method: "ATM" },
    { id: 5, date: "2025-04-23", amount: 750.0, type: "Deposit", method: "Bank Transfer" },
    { id: 6, date: "2025-04-22", amount: -200.0, type: "Withdrawal", method: "ATM" },
    { id: 7, date: "2025-04-21", amount: 1000.0, type: "Deposit", method: "Mobile App" },
    { id: 8, date: "2025-04-21", amount: -50.0, type: "Withdrawal", method: "ATM" },
    { id: 9, date: "2025-04-20", amount: 150.0, type: "Deposit", method: "Bank Transfer" },
    { id: 10, date: "2025-04-19", amount: -80.0, type: "Withdrawal", method: "ATM" },
    { id: 11, date: "2025-04-19", amount: 300.0, type: "Deposit", method: "Mobile App" },
    { id: 12, date: "2025-04-18", amount: -120.0, type: "Withdrawal", method: "ATM" },
    { id: 13, date: "2025-04-17", amount: 400.0, type: "Deposit", method: "Bank Transfer" },
    { id: 14, date: "2025-04-16", amount: -90.0, type: "Withdrawal", method: "ATM" },
    { id: 15, date: "2025-04-15", amount: 600.0, type: "Deposit", method: "Mobile App" },
    { id: 16, date: "2025-04-15", amount: -110.0, type: "Withdrawal", method: "ATM" },
    { id: 17, date: "2025-04-14", amount: 800.0, type: "Deposit", method: "Bank Transfer" },
    { id: 18, date: "2025-04-13", amount: -75.0, type: "Withdrawal", method: "ATM" },
    { id: 19, date: "2025-04-12", amount: 350.0, type: "Deposit", method: "Mobile App" },
    { id: 20, date: "2025-04-12", amount: -200.0, type: "Withdrawal", method: "ATM" },
    { id: 21, date: "2025-04-11", amount: 500.0, type: "Deposit", method: "Bank Transfer" },
    { id: 22, date: "2025-04-10", amount: -60.0, type: "Withdrawal", method: "ATM" },
    { id: 23, date: "2025-04-09", amount: 1000.0, type: "Deposit", method: "Mobile App" },
    { id: 24, date: "2025-04-08", amount: -50.0, type: "Withdrawal", method: "ATM" },
    { id: 25, date: "2025-04-07", amount: 250.0, type: "Deposit", method: "Bank Transfer" },
    { id: 26, date: "2025-04-06", amount: -100.0, type: "Withdrawal", method: "ATM" },
    { id: 27, date: "2025-04-05", amount: 150.0, type: "Deposit", method: "Mobile App" },
    { id: 28, date: "2025-04-04", amount: -200.0, type: "Withdrawal", method: "ATM" },
    { id: 29, date: "2025-04-03", amount: 1200.0, type: "Deposit", method: "Bank Transfer" },
    { id: 30, date: "2025-04-02", amount: -250.0, type: "Withdrawal", method: "ATM" },
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