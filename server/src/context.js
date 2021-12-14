const { PrismaClient } = require('@prisma/client')
const auth = require('./utils/authentication');

const prisma = new PrismaClient()

const context = {
  prisma: prisma,
  auth
}

module.exports = {
  context: context
}
