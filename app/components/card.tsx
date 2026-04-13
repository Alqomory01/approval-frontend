import type { Requisition } from "../context/RequisitionCOntext";
import type { Status } from "../context/RequisitionCOntext";

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
      <StatusBadge status={data.status} />
    </div>
  );
}