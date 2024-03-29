/*const products = [
    {id:1, name: "Set básico", image: "https://media.istockphoto.com/id/528708841/es/foto/azul-rosa-sesi%C3%B3n-de-manicura.jpg?s=612x612&w=0&k=20&c=r4IvFj8uJzC78fls_SJcYmFUp1nWkz--0o2fUHtIFVc=", description: "set de cinco pares de uñas básicas", price: 25 },
    {id:2, name: "Set mid", image: "https://media.istockphoto.com/id/495440338/es/foto/lila-manicura-francesa.webp?s=2048x2048&w=is&k=20&c=QH5zsVuYskC_rBGtIO0zgvuJmCrLrPfPo_1OPqeoWis=", description: "set de cinco pares de uñas bicolor", price: 35 },
    {id:3, name: "Set Top", image: "https://media.istockphoto.com/id/1358276091/es/foto/manicura-rosa-azul-con-un-dise%C3%B1o-de-pedrer%C3%ADa-cuadrada.jpg?s=612x612&w=0&k=20&c=mP9iWb-BtgrlFod3YboPXYbDBc-6dMcqiQwFDFi9xqg=", description: "set de cinco pares de uñas, incluye diseño de tres colores", price: 50 },
    {id:4, name: "Set Custom", image: "https://media.istockphoto.com/id/1357878239/es/foto/manicura-en-u%C3%B1as-largas.webp?s=2048x2048&w=is&k=20&c=TBMmMr_p54S6I8RntOYO9lDFYitpraWEM1S7uHTzS3A=", description: "set de cinco pares de uñas, incluye ", price: 100 },
]

const setProductsLS = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
}

const getProductsLS = () => {
    return JSON.parse(localStorage.getItem("products")) || [];
}

const setCartLS = (products) => {
    localStorage.setItem("cart", JSON.stringify(products));
}

const getCartLS = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

const getIdProductLS = () => {
    return JSON.parse(localStorage.getItem("product")) || 0;
}

const getIdCatLS = () => {
    return JSON.parse(localStorage.getItem("cat")) || "all";
}

const cantTotalProducts = () => {
    const cart = getCartLS();

    return cart.length;
}

const sumaTotalProducts = () => {
    const cart = getCartLS();
    
    return cart.reduce((acumulador, item) => acumulador += item.price, 0);
}

const deleteCart = () => {
    localStorage.removeItem("cart");
    renderCart();
    renderCartBtn();
    notification("Limpiaste el Carrito TT_TT'!");
}

const seeProduct = (id) => {
    localStorage.setItem("product", JSON.stringify(id));
}

const seeProductsByCat = (id) => {
    localStorage.setItem("cat", JSON.stringify(id));
}

const findProduct = () => {
    const products = getProductsLS();
    const id = getIdProductLS();
    const product = products.find(item => item.id === id);

    return product;
}

const addProductCart = () => {
    const product = findProduct();
    const cart = getCartLS();
    cart.push(product);
    setCartLS(cart);
    renderCartBtn();
    notification("Agregaste un Producto!");
}

const deleteProductCart = (id) => {
    const cart = getCartLS();
    const cartUpdate = cart.filter(item => item.id != id);
    setCartLS(cartUpdate);
    renderCart();
    renderCartBtn();
    notification("Eliminaste un producto :C!");
}

const renderCartBtn = () => {
    document.getElementById("cartTotal").innerHTML = cantTotalProducts();
}

const endShop = () => {
    Swal.fire({
        title: "Gracias por preferirnos!",
        text: "El total a pagar es $" + sumaTotalProducts() + " USD.",
        imagesrc: "img\logo.jpg",
        imageWidth: 160,
        imageAlt: "Frutilla triste P-O-N",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Listo"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCart();
            }
        });
}

const notification = (text) => {
    Swal.fire({
        position: "top-end",
        title: text,
        showConfirmButton: false,
        timer: 1000
    });
}

setProductsLS(products);