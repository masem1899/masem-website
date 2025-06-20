import { buildSQL } from 'gq-to-sql';
import { pool, pgPlaceholders } from './_neon.js';




const table = 'posts';

// GET posts
export default async function posts(req, res) {
    const { sql, params } = buildSQL(req, { table: table });
    console.log(sql);
    console.log(params);
    const { rows } = await pool.query(pgPlaceholders(sql), params);
    return res.status(200).json(rows);
}