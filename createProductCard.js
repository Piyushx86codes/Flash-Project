export const createProductCard =(products,parentElement)=>{
    for(let product of products){
        const cardContainer = document.createElement("div");
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
    
        const cardDetailsContainer = document.createElement("div");
        cardDetailsContainer.classList.add("card-details");
         
        //brand container//
        const brandContainer = document.createElement("div");
        brandContainer.classList.add("card-title");
        brandContainer.innerText = product.brand;
        cardDetailsContainer.appendChild(brandContainer);
    
        //Product name//
        const DescriptionContainer = document.createElement("div");
        DescriptionContainer.classList.add("card-description");
    
         //product Name//
        const name = document.createElement("p");
        name.classList.add("card-des");
        name.innerText = product.name;
        DescriptionContainer.appendChild(name);
    
        // product price//
        const price = document.createElement("p");
        price.classList.add("card-price","d-flex","align-end","gap-sm");
        price.innerText = `Rs ${product.price}`;
     
        //product oldprice//
        const oldPrice = document.createElement("span");
        oldPrice.classList.add("price-strike-through");
        oldPrice.innerText = `Rs ${product.oldPrice}`;
        price.appendChild(oldPrice);
    
        //product discount//
        const discount = document.createElement("span");
        discount.classList.add("discount");
        discount.innerText = `( ${product.discount} % OFF)`;
        price.appendChild(discount);
        DescriptionContainer.appendChild(price);
    
        //rating container//
        const ratings = document.createElement("p");
        ratings.classList.add("d-flex","align-center");
    
        const rating = document.createElement("span");
        rating.innerText = product.rating;
        ratings.appendChild(rating);
        
    
        const star = document.createElement("span");
        star.classList.add("material-icons-outlined")
        star.innerText = product.star;
        ratings.appendChild(star);
        DescriptionContainer.appendChild(ratings);
        cardDetailsContainer.appendChild(DescriptionContainer);
    
    
        //call to action button container//
         const ctabutton = document.createElement("div");
         ctabutton.classList.add("cta-btn");
         const cartbutton = document.createElement("button");
         cartbutton.classList.add("button","btn-primary", "btn-icon", "cart-btn" ,"d-flex" ,"align-center" , "justify-center" , "gap cursor ","btn-margin")
         cartbutton.setAttribute("data-id",product._id);
         const cart = document.createElement("div");
         cart.classList.add("material-icons-outlined");
         cart.innerText = "shopping_cart";
         cartbutton.appendChild(cart);
         cartbutton.innerText = "Add to Cart";
         ctabutton.appendChild(cartbutton);
         cardDetailsContainer.appendChild(ctabutton);
    
    
    
        cardContainer.appendChild(imageContainer);
        cardContainer.appendChild(cardDetailsContainer);
        
    
    
       parentElement.appendChild(cardContainer);
    }
}