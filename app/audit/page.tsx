"use client";

import Card from "../components/card";
import { useRequisition } from "../context/RequisitionContext";
import {Requisition} from "../context/RequisitionContext"
import {Status} from "../context/RequisitionContext"

export default function AuditPage() {
  const { requests, setRequests } = useRequisition();

  const hodRequests = requests.filter(
    (item) => item.status === "PENDING_AUDIT"
  );
const handleApprove = (id: number) => {
  const updated = requests.map((item): Requisition =>
    item.id === id
      ? { ...item, status: "PENDING_FINAL" as Status }
      : item
  );

  setRequests(updated);
};

  const handleReject = (id: number) => {
  const updated = requests.map((item): Requisition =>
    item.id === id
      ? { ...item, status: "REJECTED" as Status }
      : item
  );

  setRequests(updated);
};

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Audit Verifications</h1>

      {hodRequests.map((item) => (
        <div key={item.id} className="space-y-2">
          <Card data={item} status={item.status} />

          <div className="flex gap-2">
            <button
              onClick={() => handleApprove(item.id)}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Approve
            </button>

            <button
              onClick={() => handleReject(item.id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}