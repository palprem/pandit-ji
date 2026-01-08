import { defineConfig } from "prisma/config"
import 'dotenv/config'

// console.log('process.env.DATABASE_URL', process.env.DATABASE_URL);

export default defineConfig({
  datasource: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})
