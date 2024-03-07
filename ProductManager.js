
const fs = require("fs");

const fileProducts = './fileProducts.json'

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
        fs.writeFileSync.JSON

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
            return this.products;
        }
    }
    updateProduct() {



    }
    deleteProduct() {
        this.products.find((item) => item.id === id);
        item.remove();


    }
}

//Métodos
/*
addProduct
getProduct
getProductbyId
updateProduct
deleteProduct */

