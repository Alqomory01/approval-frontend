import StatusBadge from "./statusbadge";

export default function Card({ data }: any) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 space-y-2">
      <h2 className="font-semibold">{data.title}</h2>
      <p>₦{data.amount}</p>
      <StatusBadge status={data.status} />
    </div>
  );
}