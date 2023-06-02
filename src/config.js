import { config } from 'dotenv';

config()

export const PORT = process.env.SERVER_PORT
export const DB_USER = process.env.USER
export const DB_PASSWORD = process.env.PASSWORD
export const DB_HOST = process.env.HOST
export const DB_DATABASE = process.env.DB
export const DB_PORT= 3306
