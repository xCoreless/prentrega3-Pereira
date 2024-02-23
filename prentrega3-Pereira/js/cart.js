function renderCarrito() {
    const carrito = obtenerCarritoLS();
    let contenido = "";

    if (cantTotalProducts() > 0) {
        contenido = `<table class="colorFondo">
        <tbody>
        <tr>
        <td colspan='4' class="text-end"><button class="btn colorFondo2 btn-sm" onclick="eliminarCarrito()" title="Eliminar Carrito">Eliminar Carrito [X]</button></td>
        </tr>`;

        for (const product of carrito) {
            contenido += `<tr class="colorFondo">
            <td class="text-start"><img src="${product.image}" alt="${product.name}" width="64" /></td>
            <td class="text-start">${product.name}</td>
            <td class="text-start"><b>$${product.price}</b></td>
            <td class="text-end"><button class="btn colorFondo2 btn-sm" onclick="eliminarProductoCarrito(${product.id})" title="Eliminar Producto"><img src="images/trash.svg" alt="Eliminar Producto" width="16" /></button></td>
            </tr>`;
        }

        contenido += `<tr>
        <td class="text-center" colspan='2'>Total a Pagar</td>
        <td><b>$${sumaTotalProducts()}</b></td>
        <td class="text-end"><button class="btn colorFondo2 btn-sm" onclick="finalizarCompra()" title="Finalizar Compra"><b>Finalizar Compra</b></button></td>
        </tr>
        </tbody>
        </table>`;
    } else {
        contenido = `<h1 class="colorFuente roboto-bold my-5 p-5 text-center">No se encontraron Productos en el Carrito!</h1>`;
    }

    document.getElementById("products").innerHTML = contenido;
}

renderCarrito();
renderBotonCarrito();