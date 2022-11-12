divs = document.getElementsByClassName("col-md-4")
imgs = document.getElementsByTagName("img")
var imgLayer = document.getElementById("imgLayer")
var layer1 = document.getElementById("layer1")
var button = document.getElementById("btn")
var navbar = document.getElementsByClassName("navbar")

// document.body.style.overflow = "hidden"

for (var i=0 ; i<imgs.length ; i++){
    imgs[i].onclick=function(){
        layer1.style.display='block'
        var srcImg=this.getAttribute('src')
        console.log(srcImg);
        imgLayer.setAttribute('src' , srcImg)
    }
}

button.onclick = function(){
    layer1.style.display='none'
}

