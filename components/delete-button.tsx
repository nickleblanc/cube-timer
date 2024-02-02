"use client";

import { deleteSolve } from "@/actions/solve";

interface DeleteButtonProps {
  id: number;
  children?: React.ReactNode;
}

export function DeleteButton({ id, children }: DeleteButtonProps) {
  const onClick = () => {
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
