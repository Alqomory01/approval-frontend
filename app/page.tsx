"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    title: "",
    amount: "",
  });

  const handleSubmit = () => {
    console.log(form);
    alert("Request submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-5">
        
        <h1 className="text-xl sm:text-2xl font-bold text-center">
          Create Requisition
        </h1>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            placeholder="Enter title"
            className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Amount
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, amount: e.target.value })
            }
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-md"
        >
          Submit Request
        </button>
      </div>
    </div>
  );
}