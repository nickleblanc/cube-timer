"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";

interface Solve {
  time: number;
  scramble: string;
  userId: string;
}

export async function createSolve(solve: Solve) {
  await prisma.solve.create({
    data: {
      time: solve.time,
      scramble: solve.scramble,
      userId: solve.userId,
    },
  });
  revalidatePath("/timer");
}

export async function deleteSolve(solveId: number) {
  await prisma.solve.delete({
    where: {
      id: solveId,
    },
  });
  revalidatePath("/timer");
}

export async function updateSolve(solveId: number, newTime: number) {
  await prisma.solve.update({
    where: {
      id: solveId,
    },
    data: {
      time: newTime,
    },
  });
  revalidatePath("/timer");
}
