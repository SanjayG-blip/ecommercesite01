fetch("/api/products")
.then(res => res.json())
.then(data => {
    const container = document.getElementById("products");

    data.forEach(p => {
        container.innerHTML += `
        <div class="card">
            <img src="${p.image}" width="100">
            <h3>${p.name}</h3>
            <p>${p.price}</p>
            <a href="product.html?id=${p.id}">View</a>
        </div>`;
    });
});