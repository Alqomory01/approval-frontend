"use client";

import Card from "../components/card";

const data = [
  {
    id: 1,
    title: "Laptop Purchase",
    amount: 500000,
    status: "PENDING_HOD",
  },
];

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 py-6">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header */}
        <h1 className="text-xl sm:text-2xl font-bold">
         Accounts Processing
        </h1>

        {/* List */}
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 sm:p-5 rounded-xl shadow space-y-4"
          >
            {/* Card */}
            <Card data={item} />

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              
              <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded-md">
                Account Manager Receives
              </button>

              <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-md">
                Proceed to Payment
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}