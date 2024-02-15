import { getSolveById } from "@/data/solve";
import { getTimeString } from "@/lib/timer-util";
import { BackButton } from "@/components/back-button";
import { DeleteButton } from "@/components/delete-button";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrambleVisual } from "@/components/scramble-visual";

interface ModalProps {
  id: string;
  backButton: boolean;
  solvePage: boolean;
}

export async function Modal({ id, backButton, solvePage }: ModalProps) {
  const solveId = id;
  const solve = await getSolveById(parseInt(solveId));

  if (!solve) {
    return null;
  }

  return (
    <div
      className={`z-10 flex h-full w-full items-center justify-center ${solvePage ? "relative" : "fixed"}`}
    >
      <Card className="flex h-[700px] w-[600px] flex-col">
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
        <CardContent className="flex grow flex-col items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="p-8 text-5xl">{getTimeString(solve.time)}</div>
            <div className="text-md font-mono font-bold">{solve.scramble}</div>
          </div>
          <ScrambleVisual scramble={solve.scramble} />
        </CardContent>
      </Card>
    </div>
  );
}
