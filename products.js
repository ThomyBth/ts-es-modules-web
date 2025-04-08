// assert { type: "json" } ya no va
// https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file
import productsList from "./products.json" with { type: "json" };
// ✅ Esta función se encarga de ordenar los productos por precio
export function getProductSortedByPrice(products) {
    return products.sort((a, b) => a.price - b.price); // De menor a mayor
}
// ✅ Esta función crea el componente visual de la lista de productos
export function productsListComponent() {
    const section = document.createElement("section");
    section.style.border = "solid 1px #ccc";
    section.style.padding = "10px";
    const list = document.createElement("ul");
    // Usamos los productos ordenados
    const sortedProducts = getProductSortedByPrice(productsList);
    sortedProducts.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.title} - $${product.price}`;
        list.appendChild(listItem);
    });
    section.appendChild(list);
    return section;
}
