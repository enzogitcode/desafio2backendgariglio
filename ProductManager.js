const fs = require("fs");


const fileProducts = './fileproducts.json'
class ProductManager {
    static id = 0
    constructor() {

        this.path = fileProducts;
        this.products = []

    }

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
        // const saveFile = async () => {
        //     await fs.promises.writeFile(fileProducts, JSON.stringify(this.products))
        // }
        const writeFile = async () => {
            fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2))
        }
        //saveFile();
        writeFile();
    }

    getProduct() {
        return JSON.parse(fs.readFileSync(this.path, "utf-8"));
    }
    getProductbyId() {
        this.products.find((product) => product.id === id)
        
        if (!product) {
            console.log("No existe un producto con ese ID")
        }
        else {
            return fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2))
        }
    }
    async updateProduct() {
        this.products.find((product) => product.id === id)
        fs.writeFile(fileProducts, newProduct)
    }
    deleteProduct() {
        this.products.find((item) => item.id === id);
        item.remove();
        fs.writeFile(fileProducts, newProduct)

    }
}

//Testing
const manager = new ProductManager()
manager.addProduct ('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25)
manager.addProduct ('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc124', 25)
manager.updateProduct ('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc124', 24)
manager.deleteProduct (2)



//Métodos
/*
addProduct
getProduct
getProductbyId
updateProduct
deleteProduct */

