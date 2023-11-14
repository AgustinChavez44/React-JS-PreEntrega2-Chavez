const products = [
    { id: "1", name: "Pantalon cargo", category: "pantalones", price: "12000", stock: "11" },

    { id: "2", name: "Pantalon chino", category: "pantalones", price: "12000", stock: "7" },   

    { id: "3", name: "Pantalon jean", category: "pantalones", price: "12000", stock: "16" },

    { id: "4", name: "Zapatos", category: "calzados", price: "100000", stock: "10" },

    { id: "5", name: "Zapatillas", category: "calzados", price: "80000", stock: "10" }, 

    { id: "6", name: "Crocs", category: "calzados", price: "20000", stock: "4" },

    { id: "7", name: "Remeron", category: "remeras", price: "8000", stock: "21" },

    { id: "8", name: "Chomba ", category: "remeras", price: "10000", stock: "5" }, 

    { id: "9", name: "Camisa", category: "remeras", price: "14000", stock: "14" },

    { id: "10", name: "Gorra", category: "accesorios", price: "4000", stock: "10" },
];

export const getProducts = () =>  {

    return new Promise ( (resolve, reject )  => {
        
        if ( products.length > 0 ) {

            setTimeout( () => {
            resolve(products) 
            }, 500)
            
        }else {
            reject ("Productos no disponibles")
        }
    } )
}

export const getProduct = (id) =>  {

    return new Promise ((resolve, reject) => {
        const product = products.find( product => product.id === id);
        setTimeout( () => {
            if (!product) {
                reject("No se encontro el producto solicitado")
            } else {
                resolve(product);
            }
        }, 500);
    });
};

