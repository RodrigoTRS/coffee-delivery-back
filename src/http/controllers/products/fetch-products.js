const { makeFetchProductsUseCase } = require("../../../domain/use-cases/factories/make-fetch-products-use-case")

function fetchProducts(request, response) {

    const useCase = makeFetchProductsUseCase()
    const products = useCase.execute()

    return response.status(200).json(products)
}

module.exports = { 
    fetchProducts
}