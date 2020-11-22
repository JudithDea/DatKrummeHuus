// hamburger toggle according to bootstrap documentation
$(document).on("click", ".navbar-collapse.show", function (e) {
  $(this).collapse("hide");
});


let i = 0; // start point for slideshow
let numberOfImages = 34; // that's simply the number of haus images in the folder
let images = [];
let time = 5000; // time until image switches
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// create images list
let j;
for (j = 1; j <= numberOfImages; j++){
    images.push("http://datkrummehuus.de/img/haus"+j+".jpg");
}

// populate slideshow beginning with first image
document.slide.src = images[i];

// functionality for prev and next buttons
prevBtn.addEventListener("click", () => {
        if (i > 0){
            i--;
            document.slide.src = images[i];
        } else {
            i = numberOfImages-1;
            document.slide.src = images[i];
        }     
});

nextBtn.addEventListener("click", () => {
    if (i < numberOfImages-1){
        i++,
        document.slide.src = images[i]
    } else {
        i = 0;
        document.slide.src = images[i]
    }
});


// change image automatically
function changeImg(){
    document.slide.src = images[i];
    if(i < images.length -1){
        i++; 
    } else {
        i = 0; // to make it start over once it went through all images
    }
    setTimeout("changeImg()", time)
}

// to start slider when page loads
window.onload = changeImg;