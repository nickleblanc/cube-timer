import { getSolveById } from "@/data/solve";
import { getTimeString } from "@/lib/timer-util";
import { BackButton } from "@/components/back-button";
import { DeleteButton } from "@/components/delete-button";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
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
      className={`z-10 flex h-full w-full items-center justify-center bg-black/70 ${solvePage ? "relative" : "fixed"}`}
    >
      <Card className="flex h-[700px] w-[600px] flex-col">
        <CardHeader>
          <CardTitle className="flex justify-between">
            <DeleteButton
              id={solve.id}
              modal
            />
            {backButton && <BackButton />}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex grow flex-col items-center justify-between p-2">
          <div className="flex flex-col items-center">
            <div className="p-8 font-mono text-5xl font-bold">
              {getTimeString(solve.time)}
            </div>
            <div className="pb-10 text-sm">
              {solve.createdAt.toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            <ScrambleVisual scramble={solve.scramble} />
            <div className="text-md pt-6 font-mono">{solve.scramble}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
