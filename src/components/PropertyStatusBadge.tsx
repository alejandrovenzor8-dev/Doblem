import type { PropertyStatus } from "@/data/properties";

const statusStyles: Record<PropertyStatus, string> = {
  disponible: "bg-green-600 text-white",
  pre_venta: "bg-blue-600 text-white",
  vendido: "bg-neutral-700 text-white",
};

const statusLabels: Record<PropertyStatus, string> = {
  disponible: "DISPONIBLE",
  pre_venta: "PREVENTA",
  vendido: "VENDIDA",
};

interface PropertyStatusBadgeProps {
  status: PropertyStatus;
  className?: string;
}

export function getPropertyStatusLabel(status: PropertyStatus) {
  return statusLabels[status];
}

export default function PropertyStatusBadge({ status, className = "" }: PropertyStatusBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide shadow-sm ${statusStyles[status]} ${className}`}>
      {statusLabels[status]}
    </span>
  );
}
