

  type Props = {
  status: Status;
};
type Status =
  | "PENDING_HOD"
  | "PENDING_AUDIT"
  | "PENDING_FINAL"
  | "APPROVED"
  | "REJECTED"
  | "PAID";
export default function StatusBadge({ status }: Props) {

  
  const colors: Record<Status, string> = {
    PENDING_HOD: "bg-yellow-100 text-yellow-700",
    PENDING_AUDIT: "bg-blue-100 text-blue-700",
    PENDING_FINAL: "bg-purple-100 text-purple-700",
    APPROVED: "bg-green-100 text-green-700",
    REJECTED: "bg-red-100 text-red-700",
    PAID: "bg-gray-200 text-gray-800",
  };


  return (
    <span className={`px-3 py-1 rounded-full text-sm ${colors[status]}`}>
      {status.replace("_", " ")}
    </span>
  );
}