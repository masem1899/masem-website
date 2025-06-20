import { buildSQL } from 'gq-to-sql';
import { pool, pgPlaceholders } from './_neon.js';




const table = 'knowledge';

// GET knowledge
export default async function knowledge(req, res) {
    const { sql, params } = buildSQL(req, { table: table });
    const { rows } = await pool.query(pgPlaceholders(sql), params);
    return res.status(200).json(rows);
}