import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'




export default function handler(req, res) {

    res.status(404).json({ error:'Post not found' })
}