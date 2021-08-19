import { PrismaClient } from '../generated/prisma'
import { Request } from 'express'

export interface Context {
  isAuthenticated: boolean
  prisma: PrismaClient
}

export function createContext(req: Request) {
  console.log(req.headers.authorization)
  return {
    isAuthenticated: Boolean(req.headers.authorization),
    prisma: new PrismaClient(),
  }
}
