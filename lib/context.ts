import { PrismaClient } from 'generated/prisma'
import { Request } from 'express'

export function createContext(_req: Request) {
  return {
    prisma: new PrismaClient(),
  }
}
