import prisma from './db'

export const dynamic = "force-dynamic"

export async function getSolves() {
    return await prisma.solve.findMany({
        orderBy: {
            id: 'desc'
        }
    })
}

export async function fetchSolveData() {
    return await prisma.solve.findMany({
        orderBy: {
            id: 'desc'
        }
    })
}