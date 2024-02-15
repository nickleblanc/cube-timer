"use client";

import { getAllSolves } from "@/data/solve";
import { getTimeString } from "@/lib/timer-util";
import { DeleteButton } from "@/components/delete-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export default function Stats() {
  const { data: solves } = useQuery({
    queryKey: ["solves"],
    queryFn: () => getAllSolves(),
  });

  if (!solves) {
    return null;
  }

  const solveCount = solves.length;

  const times = solves.map((solve, index) => {
    let time = getTimeString(solve.time);
    return (
      <div
        className="flex flex-col"
        key={solve.id}
      >
        <div className="flex h-[35px] items-center justify-between px-2">
          <span>{solveCount - index}</span>
          <div className="flex flex-row items-center">
            <button className="mr-2">
              <Link href={`/solve/${solve.id}`}>{time}</Link>
            </button>
            <DeleteButton
              id={solve.id}
              modal={false}
            >
              <IoClose className="h-5 w-5" />
            </DeleteButton>
          </div>
        </div>
        <Separator />
      </div>
    );
  });

  return (
    <Card className="flex w-[400px] grow flex-col">
      <CardHeader>
        <CardTitle className="text-center">Recent Solves</CardTitle>
      </CardHeader>
      <Separator />
      <ScrollArea className="h-2 grow">
        <CardContent className="px-4">
          <div className="">{times}</div>
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
