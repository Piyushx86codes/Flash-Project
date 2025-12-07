// Suggested line for index.js
import { products } from "./db/products";
let productcontainer = document.getElementById("products");

for(let product of products){
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card", "card-vertical", "d-flex", "direction-column", "relative" ,"shadow");
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("card-image-container");

    //image container//
    const image =  document.createElement("img");
    image.classList.add("card-image");
    image.setAttribute("src",product.img);
    image.setAttribute("alt",product.name);

    imageContainer.appendChild(image);
    // card deatils container//

    productcontainer.appendChild(cardContainer);
}