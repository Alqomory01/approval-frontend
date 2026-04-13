import type { Requisition } from "../context/RequisitionContext";
import type { Status } from "../context/RequisitionContext";

import StatusBadge from "./statusbadge";
type Props = {
  data: Requisition;
  status: Status;
};

export default function Card({ data }:Props) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 space-y-2">
      <h2 className="font-semibold">{data.title}</h2>
      <p>₦{data.amount}</p>
      <div className="border-t pt-3 text-sm space-y-1 text-gray-700">
          <h3>Staff Info</h3>
        <p><span className="font-semibold">Staff Name:</span> {data.staffName}</p>

        <p><span className="font-semibold">Department:</span> {data.department}</p>

        <p><span className="font-semibold">Function:</span> {data.function}</p>

        <p><span className="font-semibold">Job Title:</span> {data.jobTitle}</p>

        <p><span className="font-semibold">Job Level:</span> {data.jobLevel}</p>

      </div>

      <StatusBadge status={data.status} />
    </div>
  );
}