const express = require('express')
const cors = require("cors")
const logger = require("./middleware/logger")
const cr = require("./routers/country-router")
const crt = require("./routers/city-router")

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

app.use("/countries", cr)
app.use("/cities", crt)

module.exports = app
