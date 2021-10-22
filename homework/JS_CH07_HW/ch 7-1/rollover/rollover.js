"use strict";

let timer;

function replace() {
    console.log("test");
    document.getElementById("images/deer.jpg").src=document.getElementById("images/deer.jpg").id;
    document.getElementById("images/bison.jpg").src=document.getElementById("images/bison.jpg").id;
}
// var image = document.getElementsByClassName("image2");
// image.src = "image1.jpg"

document.addEventListener("DOMContentLoaded", () => {
     const images = document.querySelectorAll("#image_rollovers img");

    timer = setTimeout(replace,1000);

    // process each img tag
    for (let image of images) {
        const oldURL = image.src;
        const newURL = image.id;

        // preload rollover image
        Image.src= newURL
       
        // set up event handlers for hovering an image
        image.addEventListener("mouseover", () => {
            image.src = newURL;
        });
        image.addEventListener("mouseout", () => {
            image.src = oldURL;
        });
    }
    
});
