const express = require("express")
const { fetchProducts } = require("./fetch-products")

const productsRoutes = express.Router()

productsRoutes.get("/", fetchProducts)

module.exports = { productsRoutes }