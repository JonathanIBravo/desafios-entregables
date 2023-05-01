
// Se creará una instancia de la clases “ProductManager”.
// Se llamará “getProduct” recién creada la instancia, debe devolver un arreglo vacío[]
// Se llamará al método “addProduct” con campos:
//      Title: “producto prueba”
//      descripción: “Este es un producto prueba” 
//      price:200,
//      thumbnail:”Sin imagen”
//      code:”Abc123”,
//      stock:25
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado 
// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el codigo estara repetido
// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

class ProductManager{
    constructor(){
        this.products=[];
    }

    getProducts() {
        return this.products;
    }
    
    addProduct(title,description,precio,thumbnail,code,stock){
        if (
            title == null ||
            description == null ||
            precio == null ||
            thumbnail == null ||
            code == null ||
            stock == null
        ){
            console.log('Rellena todos los campos')
            return;
        }

        const product = {
            title,
            precio,
            description,
            thumbnail,
            code,
            stock,
        };

        if(this.products.length ===0){
            product.Id = 1;
        } else{
            product.Id = this.products[this.products.length -1].Id + 1; 
        }

        this.products.push(product)
        console.log('Se almaceno un nuevo producto')
    }
    
    getProductById(Id){
        const product = this.products.find((product)=>{
            return product.Id==Id
        });
        if(!product){
            return 'Producto no encontrado';
        } else{
            return product;
        }
    }
}

const productManager = new  ProductManager()

console.log(
    productManager.addProduct(
        'Smart TV',
        'Smart Tv 55" 4k',
        2500,
        'https://www.smart-tv.com/',
        '55AU7000',
        50
    )
);

console.log(
    productManager.addProduct(
        'Heladera',
        'Smart Tv 55" 4k',
        1900,
        'https://www.heladera-gafa.com/',
        'H-GAFA-A030',
        32
    )
);

console.log(
    productManager.addProduct(
        'Aire acondicionado',
        'Split Inverter F/C 3200w',
        2200,
        'https://www.split-fc-3200w.com/',
        'AR18BSHQAWK2BG',
        17
    )
);

console.log(
    productManager.addProduct(
        'Anafe Electrico',
        'ANAFE ELECTRICO VITROCERAMICO 6800',
        1500,
        'https://www.anafe-vc/flexone.com/',
        'ANAF-BSHQ6800',
        10
    )
);

console.log(
    productManager.addProduct(
        'Ventilador',
        'Ventilador de piso',
        900,
        'https://www.ventilador/liliana.com/',
        'VEP-345-02',
        45
    )
);

console.log(
    productManager.addProduct(
        'Licuadora',
        'Licuadora 5 velocidades',
        1200,
        'https://www.licuadora-vc.com/',
        'LI5-ARC-01',
        15
    )
);

// console.log(productManager.getProducts());

console.log(productManager.getProductById(9));