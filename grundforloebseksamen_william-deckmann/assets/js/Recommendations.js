
// Object array
var ObjectArray = [
 
    { // Item: 1
        imgsrc: "./assets/img/favorit/favorit01.jpg",
        title: "Grilled Burger",
        price: "65kr.",
    },

    { // Item: 2
        imgsrc: "./assets/img/favorit/favorit02.jpg",
        title: "The Firehouse",
        price: "70kr.",
    },

    { // Item: 3
        imgsrc: "./assets/img/favorit/favorit03.jpg",
        title: "Grilled Burger",
        price: "90kr.",
    },

    { // Item: 4
        imgsrc: "./assets/img/favorit/favorit04.jpg",
        title: "Super Vegan",
        price: "70kr.",
    },
];



// Function: make & display items
function DisplayItems() {

    // Generate items 
    for(let i = 0; i < ObjectArray.length; i++) {

        // Parent
        let Item_Parent = document.querySelector("#Recommendations__container");

        // Container
        let Item_container = document.createElement("article");
        Item_container.className = "Recommendations__item";
        Item_Parent.appendChild(Item_container);
        
        // Img
        let Item_img = document.createElement("img");
        Item_img.className = "Recommendations__item-image";
        Item_img.src = ObjectArray[i].imgsrc;
        Item_container.appendChild(Item_img);

        // Title
        let Item_title = document.createElement("h2");
        Item_title.className = "Recommendations__item-title";
        Item_title.classList.add("General-text");
        Item_title.textContent = ObjectArray[i].title;
        Item_container.appendChild(Item_title);

        
        // Price
        let Item_text = document.createElement("p");
        Item_text.className = "Recommendations__item-price";
        Item_text.classList.add("General-text");
        Item_text.textContent = ObjectArray[i].price;
        Item_container.appendChild(Item_text); 

        // Button
        let Item_button = document.createElement("button");
        Item_button .className = "Recommendations__item-button";
        Item_button.classList.add("General-text");
        Item_button.textContent = "Favorit"
        Item_container.appendChild(Item_button);



        // Check how many items exist
        if(i < 1) {

            // Initiator
            DisplayOffer()
        };

        // Function: display offer
        function DisplayOffer() {
            // Button
            let Item_offer = document.createElement("p");
            Item_offer .className = "Recommendations__item-offer";
            Item_offer.classList.add("General-text");
            Item_offer.textContent = "-30%"
            Item_container.appendChild(Item_offer);
        };
    };
};

// Initiator
DisplayItems();