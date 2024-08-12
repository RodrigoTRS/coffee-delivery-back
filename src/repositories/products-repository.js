const { randomUUID } = require("node:crypto")

class ProductsRepository {

    products = [
        {
            title: "Expresso Tradicional",
            tags: ["Tradicional"],
            description: "O tradicional café feito com água quente e grãos moídos",
            price: 9.9
        },
        {
            title: "Expresso Americano",
            tags: ["Tradicional"],
            description: "Expresso diluído, menos intenso que o tradicional",
            price: 9.9
        },
        {
            title: "Expresso Cremoso",
            tags: ["Tradicional"],
            description: "Café expresso tradicional com espuma cremosa",
            price: 9.9
        },
        {
            title: "Expresso Gelado",
            tags: ["Tradicional", "Gelado"],
            description: "Bebida preparada com café expresso e cubos de gelo",
            price: 9.9
        },
        {
            title: "Expresso Tradicional",
            tags: ["Tradicional"],
            description: "O tradicional café feito com água quente e grãos moídos",
            price: 9.9
        },
        {
            title: "Café com leite",
            tags: ["Tradicional", "Com leite"],
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            price: 9.9
        },
        {
            title: "Latte",
            tags: ["Tradicional", "Com leite"],
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            price: 9.9
        },
        {
            title: "Capuccino",
            tags: ["Tradicional", "Com leite"],
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            price: 9.9
        },
        {
            title: "Macchiato",
            tags: ["Tradicional", "Com leite"],
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            price: 9.9
        },
        {
            title: "Mocaccino",
            tags: ["Tradicional", "Com leite"],
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            price: 9.9
        },
        {
            title: "Chocolate Quente",
            tags: ["Tradicional", "Com leite"],
            description: "Bebida feita com chocolate dissolvido no leite quente e café",
            price: 9.9
        },
        {
            title: "Cubano",
            tags: ["Tradicional", "Gelado", "Alcoólico"],
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            price: 9.9
        },
        {
            title: "Havaiano",
            tags: ["Especial"],
            description: "Bebida adocicada preparada com café e leite de coco",
            price: 9.9
        },
        {
            title: "Árabe",
            tags: ["Especial"],
            description: "Bebida preparada com grãos de café árabe e especiarias",
            price: 9.9
        },
        {
            title: "Irlandês",
            tags: ["Especial", "Alcoólico"],
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            price: 9.9
        },
    ]

    constructor() {
        this.products = this.products.map((product) => {
            const normalizedTitle = product.title
                .normalize("NFD")
                .trim()
                .toLowerCase()
                .replaceAll(" ", "-")
                .replace(/[\u0300-\u036f]/g, "");
            
            return {
                imagePath: `/coffees/${normalizedTitle}.png`,
                id: randomUUID(),
                ...product
            }
        })
    }

    fetchAll() {
        return this.products
    }
}

module.exports = { ProductsRepository }