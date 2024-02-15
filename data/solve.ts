"use server";

import prisma from "@/lib/db";

export async function getSolvesByUser(userId: string) {
  return await prisma.solve.findMany({
    where: {
      userId,
    },
    orderBy: {
      id: "desc",
    },
  });
}

export async function getSolveById(id: number) {
  return await prisma.solve.findUnique({ where: { id } });
}

export async function getAllSolves() {
  return await prisma.solve.findMany({
    orderBy: {
      id: "desc",
    },
  });
}
