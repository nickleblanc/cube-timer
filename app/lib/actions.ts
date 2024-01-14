'use server';

import { revalidatePath } from 'next/cache';
import prisma from './db'

export async function createSolve(solve: any) {
    await prisma.solve.create({
      data: {
        time: solve.time,
        scramble: solve.scramble,
        user: {
          connect: { id: 1 },
        },
      }
    })
    revalidatePath('/timer');
  }