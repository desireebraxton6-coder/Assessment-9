"use strict";

// Preload images
function preloadImages(images) {
    let loaded = [];
    for (let i = 0; i < images.length; i++) {
        loaded[i] = new Image();
        loaded[i].src = images[i];
    }
    return loaded;
}

// Switch banner images every 3 seconds
function startImageSwitching() {
    const banner = document.getElementById("banner-image");
    const images = ["images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg"];
    let preloaded = preloadImages(images);
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;
        banner.src = preloaded[index].src;
    }, 3000); // 3 seconds
}

window.onload = startImageSwitching;