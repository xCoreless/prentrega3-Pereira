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

//index
function renderProducts() {
    const products = getProductsLS();
    const cat = getIdCatLS();
    const productsFilter = cat === 'all' ? products : products.filter(item => item.cat === cat);
    let content = "";

    for (const product of productsFilter) {
        content += `<div class="col-md-4 text-center">
        <a href="producto.html" onclick="seeProduct(${product.id});" class="text-decoration-none">
        <img src="${product.image}" alt="${product.name}" height="244" />
        <p class="colorFuente roboto-bold">${product.name}</p>
        </a>
        </div>`;
    }

    document.getElementById("products").innerHTML = content;
}

renderProducts();



//products
function renderProduct() {
    const product = findProduct();
    let content = `<div class='row'>
    <div class="col-md-6 offset-md-3 text-center">
    <img src="${product.image}" alt="${product.name}" class="img-fluid" />
    </div>
    </div>
    <div class='row'>
    <div class="col-md-8 offset-md-2 text-center">
    <h2 class="mainFontColor ">${product.name}</h2>
    <p class="mainFontColor ">${product.description}</p>
    <p class="mainFontColor ">$${product.price}</p>
    <p><button class="btn" onclick="addProductCart()">(+) Agregar</button></p>
    </div>
    </div>`;

    document.getElementById("product").innerHTML = content;
}

renderProduct();
renderCartBtn();

//cart
function renderCart() {
    const cart = getCartLS();
    let content = "";

    if (cantTotalProducts() > 0) {
        content = `<table class="bgColor">
        <tbody>
        <tr>
        <td colspan='4' class="text-end"><button class="btn btn-sm" onclick="deleteCart()" title="Eliminar Carrito">Eliminar Carrito [X]</button></td>
        </tr>`;

        for (const product of cart) {
            content += `<tr class="colorFondo">
            <td class="text-start"><img src="${product.image}" alt="${product.name}" width="64" /></td>
            <td class="text-start">${product.name}</td>
            <td class="text-start"><b>$${product.price}</b></td>
            <td class="text-end"><button class="btn btn-sm" onclick="deleteCartProduct(${product.id})" title="Eliminar Producto"><img src="images/trash.svg" alt="Eliminar Producto" width="16" /></button></td>
            </tr>`;
        }

        content += `<tr>
        <td class="text-center" colspan='2'>Total a Pagar</td>
        <td><b>$${sumaTotalProducts()}</b></td>
        <td class="text-end"><button class="btn btn-sm" onclick="endShop()" title="Finalizar Compra"><b>Finalizar Compra</b></button></td>
        </tr>
        </tbody>
        </table>`;
    } else {
        content = `<h1 class="secondFontColor my-5 p-5 text-center">No se encontraron Productos en el Carrito!</h1>`;
    }

    document.getElementById("products").innerHTML = content;
}

renderCart();
renderBtnCart();