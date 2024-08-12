const express = require("express")
const cors = require("cors")

const { hello } = require("./http/controllers/hello")
const { productsRoutes } = require("./http/controllers/products/routes")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/products", productsRoutes)
app.get("/hello", hello)

module.exports = { app }