const products = [
    {id:1, name: "Set básico", image: "https://media.istockphoto.com/id/528708841/es/foto/azul-rosa-sesi%C3%B3n-de-manicura.jpg?s=612x612&w=0&k=20&c=r4IvFj8uJzC78fls_SJcYmFUp1nWkz--0o2fUHtIFVc=", description: "set de cinco pares de uñas básicas", price: 25 },
    {id:2, name: "Set mid", image: "https://media.istockphoto.com/id/495440338/es/foto/lila-manicura-francesa.webp?s=2048x2048&w=is&k=20&c=QH5zsVuYskC_rBGtIO0zgvuJmCrLrPfPo_1OPqeoWis=", description: "set de cinco pares de uñas bicolor", price: 35 },
    {id:3, name: "Set Top", image: "https://media.istockphoto.com/id/1358276091/es/foto/manicura-rosa-azul-con-un-dise%C3%B1o-de-pedrer%C3%ADa-cuadrada.jpg?s=612x612&w=0&k=20&c=mP9iWb-BtgrlFod3YboPXYbDBc-6dMcqiQwFDFi9xqg=", description: "set de cinco pares de uñas, incluye diseño de tres colores", price: 50 },
    {id:4, name: "Set Custom", image: "https://media.istockphoto.com/id/1357878239/es/foto/manicura-en-u%C3%B1as-largas.webp?s=2048x2048&w=is&k=20&c=TBMmMr_p54S6I8RntOYO9lDFYitpraWEM1S7uHTzS3A=", description: "set de cinco pares de uñas, incluye ", price: 100 },
]

c
const guardarProductsLS = (productos) => {
    localStorage.setItem("products", JSON.stringify(products));
}

const obtenerProductsLS = () => {
    return JSON.parse(localStorage.getItem("products")) || [];
}

const guardarCarritoLS = (products) => {
    localStorage.setItem("carrito", JSON.stringify(products));
}

const obtenerCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const obtenerIdProductLS = () => {
    return JSON.parse(localStorage.getItem("product")) || 0;
}

const obtenerIdCategoriaLS = () => {
    return JSON.parse(localStorage.getItem("categoria")) || "todos";
}

const cantTotalProducts = () => {
    const carrito = obtenerCarritoLS();

    return carrito.length;
}

const sumaTotalProducts = () => {
    const carrito = obtenerCarritoLS();
    
    return carrito.reduce((acumulador, item) => acumulador += item.precio, 0);
}

const eliminarCarrito = () => {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
    notificacion("Carrito Eliminado!");
}

const verProduct = (id) => {
    localStorage.setItem("product", JSON.stringify(id));
}

const verProductsPorCategoria = (id) => {
    localStorage.setItem("categoria", JSON.stringify(id));
}

const buscarProduct = () => {
    const productos = obtenerProductsLS();
    const id = obtenerIdProductLS();
    const product = products.find(item => item.id === id);

    return product;
}

const agregarProductCarrito = () => {
    const product = buscarProduct();
    const carrito = obtenerCarritoLS();
    carrito.push(product);
    guardarCarritoLS(carrito);
    renderBotonCarrito();
    notificacion("Producto Agregado!");
}

const eliminarProductCarrito = (id) => {
    const carrito = obtenerCarritoLS();
    const carritoActualizado = carrito.filter(item => item.id != id);
    guardarCarritoLS(carritoActualizado);
    renderCarrito();
    renderBotonCarrito();
    notificacion("Producto Eliminado!");
}

const renderBotonCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = cantTotalProducts();
}

const finalizarCompra = () => {
    Swal.fire({
        title: "Gracias por tu Compra!",
        text: "El total a pagar es $" + sumaTotalProducts() + " pesos.",
        imageUrl: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/wordpress/web/app/uploads/sites/5/2021/03/Burger-King-Logo-CMS.png",
        imageWidth: 160,
        imageAlt: "Burger King",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarCarrito();
            }
        });
}

const notificacion = (texto) => {
    Swal.fire({
        position: "top-end",
        title: texto,
        showConfirmButton: false,
        timer: 1000
    });
}

guardarProductsLS(products);