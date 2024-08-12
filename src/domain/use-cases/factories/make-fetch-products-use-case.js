const { ProductsRepository } = require("../../../repositories/products-repository")
const { FetchProductsUseCase } = require("../fetch-products-use-case")

function makeFetchProductsUseCase() {
    const productsRepository = new ProductsRepository()
    const useCase = new FetchProductsUseCase(productsRepository)

    return useCase
}

module.exports = { makeFetchProductsUseCase }