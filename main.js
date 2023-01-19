function fetchProducts() {
  fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => {
      const products = data.products;

      document.body.innerHTML = products
        .map((product) => {
          return `
          <will-card>
          <p slot="description">${product.description}</p>
          <p slot="title">${product.title}</p>
          <img slot="thumbnail" src=${product.thumbnail} alt="photo of ${product.title}" />
          </will-card>
        `;
        })
        .join('');
    });
}

// function buildCard(cardData) {

// }

fetchProducts();
