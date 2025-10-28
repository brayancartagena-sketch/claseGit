const comicsController = requiere("../controllers/comics")
const router = require("express").Router()
comicsRouter.get("/tofo", comicsController.getComics)

module.exports = comicsRouter