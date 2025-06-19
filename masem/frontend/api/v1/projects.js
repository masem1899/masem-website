import { buildSQL } from 'gq-to-sql';
import { pool } from './_neon.js';




const table = 'projects';

// GET projects
export default async function projects(req, res) {
    const { sql, params } = buildSQL(req, { table: table });
    const { rows } = await pool.query(sql, params);
    return res.status(200).json(rows);
}