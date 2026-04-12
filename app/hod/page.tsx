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

export default function HodPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">HOD Approvals</h1>

      {data.map((item) => (
        <div key={item.id} className="space-y-2">
          <Card data={item} />

          <div className="flex gap-2">
            <button className="bg-green-600 text-white px-3 py-1 rounded">
              Approve
            </button>
            <button className="bg-red-600 text-white px-3 py-1 rounded">
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}