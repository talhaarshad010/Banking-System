
export function AdminAccountsPage() {
    const accounts = [
      { type: "Checking", balance: 5420.5, number: "**** 1234" },
      { type: "Savings", balance: 12750.75, number: "**** 5678" },
      { type: "Credit", balance: -1250.25, number: "**** 9012" },
    ];
  
    return (
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">All Accounts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accounts.map((acc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 space-y-2 border border-gray-100"
            >
              <h2 className="text-lg font-semibold text-gray-800">{acc.type}</h2>
              <p
                className={`text-xl font-bold ${acc.balance < 0 ? "text-red-500" : "text-green-600"}`}
              >
                ${Math.abs(acc.balance).toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-gray-500">{acc.number}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  