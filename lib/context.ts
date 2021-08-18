import { PrismaClient } from '../generated/prisma'
import { Request } from 'express'

export interface Context {
  prisma: PrismaClient
}

export function createContext(_req: Request) {
  return {
    prisma: new PrismaClient(),
  }
}
