"use client";

import { useState } from "react";

type Status =
  | "PENDING_HOD"
  | "AUDIT_REVIEW"
  | "FINAL_APPROVAL"
  | "READY_FOR_PAYMENT"
  | "PAID"
  | "REJECTED";

type Role = "STAFF" | "HOD" | "AUDIT" | "APPROVER" | "ACCOUNT";

type Requisition = {
  id: number;
  title: string;
  amount: number;
  status: Status;
};

export default function RequisitionList() {
  const [role, setRole] = useState<Role>("STAFF");

  const [requests, setRequests] = useState<Requisition[]>([
    {
      id: 1,
      title: "Office Chairs",
      amount: 50000,
      status: "PENDING_HOD",
    },
    {
      id: 2,
      title: "Laptop Purchase",
      amount: 250000,
      status: "AUDIT_REVIEW",
    },
  ]);

  const updateStatus = (id: number, newStatus: Status) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-xl sm:text-2xl font-bold">
            Requisition List
          </h1>

          {/* Role Switcher */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="border p-2 rounded-md"
          >
            <option value="STAFF">Staff</option>
            <option value="HOD">HOD</option>
            <option value="AUDIT">Audit</option>
            <option value="APPROVER">Approver</option>
            <option value="ACCOUNT">Account</option>
          </select>
        </div>

        {/* List */}
        <div className="space-y-4">
          {requests.map((req) => (
            <div
              key={req.id}
              className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              {/* Info */}
              <div>
                <h3 className="font-semibold">{req.title}</h3>
                <p className="text-sm text-gray-500">
                  Amount: ₦{req.amount}
                </p>
                <span className="text-xs px-2 py-1 rounded bg-gray-200">
                  {req.status}
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2">
                
                {/* HOD Actions */}
                {role === "HOD" && req.status === "PENDING_HOD" && (
                  <>
                    <button
                      onClick={() =>
                        updateStatus(req.id, "AUDIT_REVIEW")
                      }
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() =>
                        updateStatus(req.id, "REJECTED")
                      }
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Reject
                    </button>
                  </>
                )}

                {/* Audit Actions */}
                {role === "AUDIT" && req.status === "AUDIT_REVIEW" && (
                  <>
                    <button
                      onClick={() =>
                        updateStatus(req.id, "FINAL_APPROVAL")
                      }
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Recommend
                    </button>
                    <button
                      onClick={() =>
                        updateStatus(req.id, "PENDING_HOD")
                      }
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Return
                    </button>
                  </>
                )}

                {/* Final Approver */}
                {role === "APPROVER" &&
                  req.status === "FINAL_APPROVAL" && (
                    <>
                      <button
                        onClick={() =>
                          updateStatus(req.id, "READY_FOR_PAYMENT")
                        }
                        className="bg-green-700 text-white px-3 py-1 rounded"
                      >
                        Final Approve
                      </button>
                      <button
                        onClick={() =>
                          updateStatus(req.id, "REJECTED")
                        }
                        className="bg-red-700 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}

                {/* Account */}
                {role === "ACCOUNT" &&
                  req.status === "READY_FOR_PAYMENT" && (
                    <button
                      onClick={() =>
                        updateStatus(req.id, "PAID")
                      }
                      className="bg-purple-600 text-white px-3 py-1 rounded"
                    >
                      Mark as Paid
                    </button>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}