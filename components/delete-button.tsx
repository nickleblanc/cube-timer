"use client";

import { deleteSolve } from "@/actions/solve";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  id: number;
  modal: boolean;
  children?: React.ReactNode;
}

export function DeleteButton({ id, modal, children }: DeleteButtonProps) {
  const router = useRouter();
  const onClick = () => {
    if (modal) {
      router.back();
    }
    deleteSolve(id);
  };
  return (
    <span
      className="w-full"
      onClick={onClick}
    >
      {children}
    </span>
  );
}
