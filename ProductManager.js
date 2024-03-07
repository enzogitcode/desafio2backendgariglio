
const fs= require ("fs");
const fileProducts= './fileProducts.json'


class ProductManager {
    static id=0
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
    }

    getProduct() {
         const productsArray = this.path 
    }
    getProductbyId() {
        this.products.find((product) => product.id === id)
        return 
    }
    updateProduct () {

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

