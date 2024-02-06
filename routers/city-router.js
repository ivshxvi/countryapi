const { Router } = require("express")

const cct = require("../controllers/city-controller")

const crt = Router()

crt.get("/", cct.index)
crt.get("/:name", cct.show)
crt.post("/", cct.create)
crt.delete("/:name", cct.destroy)
crt.patch("/:name", cct.update)

module.exports = crt