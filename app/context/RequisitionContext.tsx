"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Status =
  | "PENDING_HOD"
  | "PENDING_AUDIT"
  | "PENDING_FINAL"
  | "APPROVED"
  | "REJECTED"
  | "PAID";

export type Requisition = {
  id: number;
  title: string;
  amount: number;
  staffName: string;
  department: string;
  function: string;
  jobTitle: string;
  jobLevel: string;
  createdAt?: Date;
  status: Status;
 
};

type ContextType = {
  requests: Requisition[];
  setRequests: React.Dispatch<React.SetStateAction<Requisition[]>>;
};

const RequisitionContext = createContext<ContextType | null>(null);
type Props = {
  children: ReactNode;
};
export const RequisitionProvider = ({ children }: Props) => {
  const [requests, setRequests] = useState<Requisition[]>([]);

  return (
    <RequisitionContext.Provider value={{ requests, setRequests }}>
      {children}
    </RequisitionContext.Provider>
  );
};

export const useRequisition = () => {
  const context = useContext(RequisitionContext);
  if (!context) {
    throw new Error("useRequisition must be used within provider");
  }
  return context;
};