import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

// read config
dotenv.config({path:'.env.local'});

// create a Pool instance
export const pool = new Pool({
    connectionString: process.env.VITE_NEON_URL
});

export function pgPlaceholders(sql) {
    let counter = 1;
    return sql.replace(/\?/g, () => `$${counter++}`);
}