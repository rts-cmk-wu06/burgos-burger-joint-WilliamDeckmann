
// Variables
let GalleryImg = document.querySelector("#Gallery__gallery-image");
let ImgArray = [
    "./assets/img/galleri/galleri05.jpg",
    "./assets/img/galleri/galleri06.jpg",
    "./assets/img/galleri/galleri04.jpg",
];
let ImgFill = false;
let ImgNumber = 0;

// Load site
window.addEventListener('load', function() {
    
    // Initiator
    DisplayGalleryThumbnails();
});

// Function: Thumbnails
function DisplayGalleryThumbnails() {

    // Create thumbnail fro each array item
    for (let i = 0; i < ImgArray.length; i++) {

        // Create and display thumbnails
        let GalleryThumbnail = document.createElement("img");
        GalleryThumbnail.classList.add("Gallery__gallery-thumbnail");
        GalleryThumbnail.src = ImgArray[i];
        document.querySelector("#Gallery__gallery-thumbnail-container").appendChild(GalleryThumbnail);
    };
};

// Click event: Gallery thumbnail container
document.querySelector("#Gallery__gallery-thumbnail-container").addEventListener("click", SetGalleryImage);

// Function: Set gallery image
function SetGalleryImage(event) {

    // If statement
    if (event.target.className === "Gallery__gallery-thumbnail") {

        // Set image source
        let TargetSrc = event.target.attributes.src.nodeValue;
        GalleryImg.setAttribute("src", TargetSrc);
    };
};