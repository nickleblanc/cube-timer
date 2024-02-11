import { getSolveById } from "@/data/solve";
import { getTimeString } from "@/lib/timer-util";
import { BackButton } from "@/components/back-button";
import { DeleteButton } from "@/components/delete-button";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ModalProps {
  id: string;
  backButton: boolean;
}

export async function Modal({ id, backButton }: ModalProps) {
  const solveId = id;
  const solve = await getSolveById(parseInt(solveId));

  if (!solve) {
    return null;
  }

  return (
    <div className="fixed z-10 flex h-full w-full items-center justify-center">
      <Card className="h-[700px] w-[600px]">
        <CardHeader>
          <CardTitle className="flex justify-end">
            <DeleteButton
              id={solve.id}
              modal
            >
              <Button variant="destructive">Delete</Button>
            </DeleteButton>
            {backButton && <BackButton />}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="p-4 text-3xl">{getTimeString(solve.time)}</div>
          <div className="text-lg">{solve?.scramble}</div>
        </CardContent>
      </Card>
    </div>
  );
}
