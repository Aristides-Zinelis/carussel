import { config } from '../config/carussel.config';

var carussel = {};

var count = config.images.length;

 carussel.onInit = function(){
  for(let i = 0 ; i < count; i++){
    carussel.addImage(config.images[i]);
  }
  carussel.addHandlers();
  carussel.addChevrons();
}

 carussel.addHandlers = function(){
  for(let i = 0 ; i < count/3; i++){
   carussel.addHandler(i);
   }
  carussel.setFirsthandlerActive();
}

carussel.addChevrons = function(){
carussel.addChevron("fa-chevron-left", "left");
carussel.addChevron("fa-chevron-right", "right");
}

carussel.addChevron = function(className, id){
  var wrapper = document.getElementById("chevs-wrapper"), chev;
  chev = document.createElement("a");
  chev.classList.add("fa", className);
  chev.setAttribute("href", "#");
  chev.setAttribute("id", id);
  chev.addEventListener( 'click', function(event){carussel.nextSlide(event)});

  wrapper.appendChild(chev);
}

let sl = 0;
carussel.nextSlide = function(event){
var target = event ? event.target : window.event.srcElement;
target.id==="left" ? sl-- : sl++;
if(sl>3){sl=0};
if(sl<0){sl=3};
carussel.goToSlide(sl);
}


 carussel.addHandler = function(index){
	var ul = document.getElementById("handlers"), li, a;
	li = document.createElement("li");
    a = document.createElement("a");
    a.setAttribute("href", "#");
    a.addEventListener( 'click', function(){carussel.goToSlide(index)});
    li.appendChild(a);
    ul.appendChild(li);
}

 carussel.setFirsthandlerActive = function(){
    document.querySelectorAll(".handler-wrapper a")[0].classList.add("active");
}

 carussel.goToSlide = function(index){
   sl = index;
  var ul = document.getElementById("list");
  var hndler = document.querySelectorAll(".handler-wrapper a");
  ul.style.left = (-(ul.offsetWidth / 12) * index*3) +"px";
  document.getElementsByClassName("active")[0].classList.remove("active");
  hndler[index].classList.add("active");
}

 carussel.addImage = function(image){
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var img = document.createElement("IMG");
    img.setAttribute("src", image);
    li.appendChild(img);
    ul.appendChild(li);
}

export {carussel}
