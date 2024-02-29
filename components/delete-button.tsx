"use client";

import { deleteSolve } from "@/actions/solve";
import { useRouter } from "next/navigation";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Button } from "@/components/ui/button";
import { IoClose } from "react-icons/io5";

interface DeleteButtonProps {
  id: number;
  modal: boolean;
}

export function DeleteButton({ id, modal }: DeleteButtonProps) {
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

  if (modal) {
    return (
      <Button
        variant="destructive"
        onClick={onClick}
      >
        Delete
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8"
      onClick={onClick}
    >
      <IoClose className="h-5 w-5" />
    </Button>
  );
}
