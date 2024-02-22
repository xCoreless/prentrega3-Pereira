const products = [
    {id:1, nombre:"Set Básico", colores:1, precio:25},
    {id:2, nombre:"Set Mid", colores:2 , precio:35},
    {id:3, nombre:"Set Top", colores:3, precio:50},
    {id:4, nombre:"Set Custom", colores:10, precio:100} 
];

class Cart {
    constructor() {
        this.products = [];
        this.discount = 25;
        this.maxProdDiscount = 3;
        this.total = 0;
    }

    addProduct(id) {
        let product = products.find(prod => prod.id === id);
        console.log(product);

        if (product) {
            this.products.push(product);
            console.log("Agregaste el Producto #" + id + " al Carrito!");
        } else {
            console.log("No se encontró el Producto con #" + id + "!");
        }
    }

    cartList() {
        let salida = "";

        this.products.forEach(item => {
            salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
        });

        return salida;
    }

    calcularTotalProductos() {
        return this.products.length;
    }

    applyDiscount() {
        if (this.calcularTotalProductos() >= this.maxProdDiscount) {
            return Math.round((this.calcularTotalPagar() * this.discount) / 100);
        } else {
            return 0;
        }
    }

    calcularTotalPagar() {
        let total = 0;

        this.products.forEach(item => {
            total += item.precio;
        });

        return total;
    }
}

const cart = new Cart();
let opcionSeleccionada = 1;

while (opcionSeleccionada !== 0) {
    opcionSeleccionada = prompt("Seleccione el producto a agregar al Carrito: (0 para Salir)");
    opcionSeleccionada = parseInt(opcionSeleccionada); // Convert input to number

    if (opcionSeleccionada === 0 || isNaN(opcionSeleccionada)) { // Check if input is 0 or NaN
        break;
    }

    cart.addProduct(opcionSeleccionada);
}

let prodsCart = "Detalle:\n" + cart.cartList();
let salidaSubTotal = "Subtotal: $" + cart.calcularTotalPagar();
let salidaDiscount = "Descuento: $" + cart.applyDiscount();
let montoFinal = "Total: $" + (cart.calcularTotalPagar() - cart.applyDiscount());
alert(prodsCart + "\n" + salidaSubTotal + "\n" + salidaDiscount + "\n" + montoFinal);

alert(montoFinal);