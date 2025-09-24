"use strict";

// Show enlarged image and caption
function showImage(e) {
    let img = e.target;
    let fileName = img.src.split('/').pop();

    let details = document.getElementById("details");
    details.innerHTML = `
        <div class="details-image">
            <img src="images/${fileName}" alt="${fileName}">
            <p class="details-caption">This is ${fileName}</p>
        </div>
    `;
}

// Clear details
function clearImage() {
    let details = document.getElementById("details");
    details.innerHTML = "";
}

window.onload = function () {
    let galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(img => {
        img.addEventListener("click", showImage);
        img.addEventListener("mouseleave", clearImage);
    });
};