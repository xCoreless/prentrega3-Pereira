function renderProductos() {
    const productos = obtenerProductosLS();
    const categoria = obtenerIdCategoriaLS();
    const productosFiltrados = categoria === 'todos' ? productos : productos.filter(item => item.categoria === categoria);
    let contenido = "";

    for (const producto of productsFiltrados) {
        content += `<div class="col-md-4 text-center">
        <a href="producto.html" onclick="verProducto(${product.id});" class="text-decoration-none">
        <img src="${product.image}" alt="${product.name}" height="244" />
        <p class="colorFuente roboto-bold">${product.name}</p>
        </a>
        </div>`;
    }

    document.getElementById("products").innerHTML = content;
}

renderProducts();
renderBtnCarrito();


