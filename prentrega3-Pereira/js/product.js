function productsRender() {
    const product = getProductLS();
    let content = `<div class="col-md-6 offset-md-3 text-center">
                <img src="${product.image}" alt="${product.name}" class="img-fluid">
                <p class="secondFontColor fw-bolder text-center">${product.name}</p>
                <p class="secondFontColor fw-bold text-center">${product.description}</p>
                <p class="secondFontColor fw-bold text-center">$${product.price}</p>
            </a>
            </div>`;
        document.getElementById("product").innerHTML = content;
}
productsRender();
