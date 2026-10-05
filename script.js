function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    filter = input.value.toUpperCase();
    div = document.getElementById("dropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

fetch('data.json')
    .then(response => response.json())
    .then(products => {
        const productCard = document.getElementById('productList');
        products.forEach(product => {
            productCard.innerHTML += `

            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart">Add to Cart</button>    
            </div>
            `;
        });
    });