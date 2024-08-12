class FetchProductsUseCase {

    _productsRepository

    constructor(productsRepository) {
        this._productsRepository = productsRepository
    }

    execute() {
        const products =  this._productsRepository.fetchAll()
        return products
    }
}

module.exports = { FetchProductsUseCase }