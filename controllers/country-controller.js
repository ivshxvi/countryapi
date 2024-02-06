const Country = require("../models/Country")

const index = async (req, res) => {
    try{
        const data = await Country.getAll()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = { index }