"use client";

import { deleteSolve } from "@/actions/solve";
import { useRouter } from "next/navigation";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useCurrentUser } from "@/hooks/use-current-user";

interface DeleteButtonProps {
  id: number;
  modal: boolean;
  children?: React.ReactNode;
}

export function DeleteButton({ id, modal, children }: DeleteButtonProps) {
  const user = useCurrentUser();
  const userId = user?.id;
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteSolve,
    onMutate: () => {
      queryClient.cancelQueries({ queryKey: ["solves", userId] });
      const previousSolves = queryClient.getQueryData(["solves", userId]);
      queryClient.setQueryData(["solves", userId], (old: any) => {
        return old.filter((solve: any) => solve.id !== id);
      });
      return { previousSolves };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["solves", userId] });
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
