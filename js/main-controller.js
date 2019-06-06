'use strict'

function onInit() {
    var imgs = createImages();
<<<<<<< HEAD
    // renderImage(imgs)
=======
    
   
>>>>>>> 2bd579a8e1a17c5661004c42f66978a80ff5b303
    console.log(imgs);

}

function renderImage(imgs) {
    var idx = 0
    imgs.forEach( img =>  {
        var imgBox = document.querySelectorAll('.images');
        imgBox[idx] = `<img class="images img-1" src="${imgs[idx].url}" alt="">`
    } ) 
}