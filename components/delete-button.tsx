"use client";

import { deleteSolve } from "@/actions/solve";
import { useRouter } from "next/navigation";
import { useQueryClient, useMutation } from "@tanstack/react-query";

interface DeleteButtonProps {
  id: number;
  modal: boolean;
  children?: React.ReactNode;
}

export function DeleteButton({ id, modal, children }: DeleteButtonProps) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteSolve,
    onMutate: () => {
      queryClient.cancelQueries({ queryKey: ["solves"] });
      const previousSolves = queryClient.getQueryData(["solves"]);
      queryClient.setQueryData(["solves"], (old: any) => {
        return old.filter((solve: any) => solve.id !== id);
      });
      return { previousSolves };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["solves"] });
    },
    mutationKey: ["deleteSolve"],
  });

  const router = useRouter();
  const onClick = () => {
    mutate(id);
    if (modal) {
      router.back();
    }
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
