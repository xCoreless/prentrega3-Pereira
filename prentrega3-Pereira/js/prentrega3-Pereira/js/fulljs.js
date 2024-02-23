const products = [
    {id:1, name: "Set básico", image: "https://media.istockphoto.com/id/528708841/es/foto/azul-rosa-sesi%C3%B3n-de-manicura.jpg?s=612x612&w=0&k=20&c=r4IvFj8uJzC78fls_SJcYmFUp1nWkz--0o2fUHtIFVc=", description: "set de cinco pares de uñas básicas", price: 25 },
    {id:2, name: "Set mid", image: "https://media.istockphoto.com/id/495440338/es/foto/lila-manicura-francesa.webp?s=2048x2048&w=is&k=20&c=QH5zsVuYskC_rBGtIO0zgvuJmCrLrPfPo_1OPqeoWis=", description: "set de cinco pares de uñas bicolor", price: 35 },
    {id:3, name: "Set Top", image: "https://media.istockphoto.com/id/1358276091/es/foto/manicura-rosa-azul-con-un-dise%C3%B1o-de-pedrer%C3%ADa-cuadrada.jpg?s=612x612&w=0&k=20&c=mP9iWb-BtgrlFod3YboPXYbDBc-6dMcqiQwFDFi9xqg=", description: "set de cinco pares de uñas, incluye diseño de tres colores", price: 50 },
    {id:4, name: "Set Custom", image: "https://media.istockphoto.com/id/1357878239/es/foto/manicura-en-u%C3%B1as-largas.webp?s=2048x2048&w=is&k=20&c=TBMmMr_p54S6I8RntOYO9lDFYitpraWEM1S7uHTzS3A=", description: "set de cinco pares de uñas, incluye ", price: 100 },
];

// Set and get products in local storage
const setProductsLS = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
};

const getProductsLS = () => {
    return JSON.parse(localStorage.getItem("products")) || [];
};

// Get cart data from local storage
const getCartLS = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
};

// Render products on the index page
function renderProducts() {
    const products = getProductsLS();
    let content = "";

    for (const product of products) {
        content += `<div class="col-md-4 text-center">
        <a href="product.html?id=${product.id}" class="text-decoration-none">
        <img src="${product.image}" alt="${product.name}" height="244" />
        <p class="colorFuente roboto-bold">${product.name}</p>
        </a>
        </div>`;
    }

    document.getElementById("products").innerHTML = content;
}

// Render a single product on the product page
function renderProduct() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = products.find(parameter => parameter.id === productId);

    if (product) {
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
        <p><button class="btn" onclick="addProductCart(${product.id})">(+) Agregar</button></p>
        </div>
        </div>`;

        document.getElementById("product").innerHTML = content;
    } else {
        document.getElementById("product").innerHTML = "<p>Product not found.</p>";
    }
}

// Render the cart on the cart page
function renderCart() {
    const cart = getCartLS();
    let content = "";

    if (cart.length > 0) {
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
            <td class="text-end"><button class="btn btn-sm" onclick="deleteProductCart(${product.id})" title="Eliminar Producto"><img src="images/trash.svg" alt="Eliminar Producto" width="16" /></button></td>
            </tr>`;
        }

        content += `<tr>
        <td class="text-center" colspan='2'>Total a Pagar</td>
        <td><b>$${cart.reduce((total, product) => total + product.price, 0)}</b></td>
        <td class="text-end"><button class="btn btn-sm" onclick="endShop()" title="Finalizar Compra"><b>Finalizar Compra</b></button></td>
        </tr>
        </tbody>
        </table>`;
    } else {
        content = `<h1 class="secondFontColor my-5 p-5 text-center">No se encontraron Productos en el Carrito!</h1>`;
    }

    document.getElementById("cart").innerHTML = content;
}

// Add a product to the cart
function addProductCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cart = getCartLS();
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }
}

// Delete a product from the cart
function deleteProductCart(productId) {
    const cart = getCartLS();
    const updatedCart = cart.filter(product => product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    renderCart();
}

// Clear the cart
function deleteCart() {
    localStorage.removeItem("cart");
    renderCart();
}

// Initialize the index page
renderProducts();

// Initialize the product page
renderProduct();

// Initialize the cart page
renderCart();