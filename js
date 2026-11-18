document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-list");

    if (typeof products !== "undefined" && productContainer) {
        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <h3>${product.name}</h3>
                <div class="price">${product.price.toLocaleString()} ₽</div>
            `;
            
            productContainer.appendChild(card);
        });
    }
});
