const fs = require("fs");

const fileProducts = './fileproducts.json'
class ProductManager {
    constructor() {

        this.path = fileProducts;
        this.products = []

    }
    static id = 0

    //Métodos 

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }
        if (this.products.some((product) => product.code === code)) {
            console.log("El código debe ser único")
            return;
        }
        const newProduct = {
            id: ++ProductManager.id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newProduct)

        const writeFile = async () => {
            fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2))
        }
        writeFile();
    }

    getProduct() {
        return JSON.parse(fs.readFileSync(this.path, "utf-8"));

    }
    getProductbyId(id) {

        if (this.products.find((product) => product.id == id)) {
            const foundedProduct = this.products.find((product) => product.id == id)
            const writeFile = async () => {
                fs.writeFileSync(this.path, JSON.stringify(foundedProduct, null, 2))
            }
            writeFile();
        }
        else {
            console.log("No existe un producto con ese ID")
        }
    }
    async updateProduct(id) {
        const foundedProduct = this.products.find((product) => product.id == id)
        if (!foundedProduct) {
            console.log("No existe un producto con ese ID,")
        }
        else {

            const updateFile = async () => {

                fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2))
            }
            updateFile();
        }
    }
    async deleteProduct(id) {
        const foundedProduct = this.products.find((product) => product.id == id)
        if (!foundedProduct) {
            console.log("No existe un producto con ese ID")
        }
        else {
           const otherProducts= this.products.filter((product) => product.id !==id) 
            const writeFile = async () => {
                fs.writeFileSync(this.path, JSON.stringify(otherProducts, null, 2))
            }
            writeFile();
        }
    }
}

//Testing
const manager = new ProductManager()

manager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25)
manager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc124', 25)
manager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc125', 24)

