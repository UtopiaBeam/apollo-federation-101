import { PrismaClient } from '../generated/prisma'
import { Request } from 'express'

export interface Context {
  prisma: PrismaClient
}

export function createContext(req: Request) {
  if (!req.headers.authorization) {
    throw new Error('Unauthorized')
  }
  console.log(req.headers.authorization)

  return {
    prisma: new PrismaClient(),
  }
}
