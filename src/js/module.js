import { config } from '../config/carussel.config';


var count = config.images.length;

function onInit(){
  for(let i = 0 ; i < count; i++){
    addImage(config.images[i]);
  }
}

function addHandlers(){
  var ul = document.getElementById("handlers"), li, a;
  for(let i = 0 ; i < count/3; i++){
    li = document.createElement("li");
    a = document.createElement("a");
    a.addEventListener( 'click', function(){nextSlide(i)});
    li.appendChild(a);
    ul.appendChild(li);
    }
  setFirsthandlerActive();
}

function setFirsthandlerActive(){
    document.querySelectorAll(".handler-wrapper a")[0].classList.add("active");
}

function nextSlide(index){
  var ul = document.getElementById("list");
  var hndler = document.querySelectorAll(".handler-wrapper a");
  ul.style.left = (-(ul.offsetWidth / 12) * index*3) +"px";
  document.getElementsByClassName("active")[0].classList.remove("active");
  hndler[index].classList.add("active");
}

function addImage(image){
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var img = document.createElement("IMG");
    img.setAttribute("src", image);
    li.appendChild(img);
    ul.appendChild(li);
}

export {onInit, addImage, addHandlers}