'use server';

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient()

export async function createSolve(solve: any) {
    console.log(solve);
    // revalidatePath('/timer');
    return await prisma.solve.create({
      data: {
        time: solve.time,
        scramble: solve.scramble,
        user: {
          connect: { id: 1 },
        },
      }
    })
  }