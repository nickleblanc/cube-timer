import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getSolves() {
    return await prisma.solve.findMany()
}

export async function fetchSolveData() {
    return await prisma.solve.findMany()
}