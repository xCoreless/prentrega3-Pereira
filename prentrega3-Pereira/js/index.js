/*function renderProducts() {
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



