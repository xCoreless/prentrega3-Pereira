/*function renderProduct() {
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