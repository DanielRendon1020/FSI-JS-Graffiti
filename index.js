
// Select some elements...
let header = document.querySelector('#page-header')
header.style.transform = 'rotateX(180deg)'

let images = document.querySelectorAll(' .dog-image')
for(let i = 0; i < images.length; i++) {
    images[i].style.filter = 'saturate(10000%) contrast(50%)'
}