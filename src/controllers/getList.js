const Connection = require('../config/DB/connection')
const config = require('../config/DB/config')
const db = new Connection(config)
const { entity } = require('../utils')


module.exports = async (req, res) => {
    let { model } = req.params
    const name = entity(model)
    const pool = await db.connect()
    const result = await pool.request().query(`SELECT * FROM ${name}`)
    res.status(200).send(result)
}