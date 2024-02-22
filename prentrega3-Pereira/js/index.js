const products = [
    {id:1, name: "Set básico", image: "https://media.istockphoto.com/id/528708841/es/foto/azul-rosa-sesi%C3%B3n-de-manicura.jpg?s=612x612&w=0&k=20&c=r4IvFj8uJzC78fls_SJcYmFUp1nWkz--0o2fUHtIFVc=", description: "set de cinco pares de uñas básicas", price: 25 },
    {id:2, name: "Set mid", image: "https://media.istockphoto.com/id/495440338/es/foto/lila-manicura-francesa.webp?s=2048x2048&w=is&k=20&c=QH5zsVuYskC_rBGtIO0zgvuJmCrLrPfPo_1OPqeoWis=", description: "set de cinco pares de uñas bicolor", price: 35 },
    {id:3, name: "Set Top", image: "https://media.istockphoto.com/id/1358276091/es/foto/manicura-rosa-azul-con-un-dise%C3%B1o-de-pedrer%C3%ADa-cuadrada.jpg?s=612x612&w=0&k=20&c=mP9iWb-BtgrlFod3YboPXYbDBc-6dMcqiQwFDFi9xqg=", description: "set de cinco pares de uñas, incluye diseño de tres colores", price: 50 },
    {id:4, name: "Set Custom", image: "https://media.istockphoto.com/id/1357878239/es/foto/manicura-en-u%C3%B1as-largas.webp?s=2048x2048&w=is&k=20&c=TBMmMr_p54S6I8RntOYO9lDFYitpraWEM1S7uHTzS3A=", description: "set de cinco pares de uñas, incluye ", price: 100 },
]

function productsRender() {
    let content = "";

    for (const product of products) {
        content += `<div class="col-sm">
            <a href="product.html" onclick="seeProduct(${product.id});">
                <img src="${product.image}" alt="${product.name}" class="img-fluid">
                <p class="secondFontColor fw-bolder text-center">${product.name}</p>
                <p class="secondFontColor fw-bold text-center">${product.description}</p>
                <p class="secondFontColor fw-bold text-center">$ ${product.price}</p>
            </a>
        </div>`;
    }
    document.getElementById("products").innerHTML = content;
}

productsRender();