
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function() {
    var btnvalue=this.innerHTML;

    makesound(btnvalue);
    animation(btnvalue);
    });
}
document.addEventListener("keypress",function (event) {
  makesound(event.key);
animation(event.key);
});

function makesound(key) {
  switch (key) {
    case "i":
    var x=new Audio("sounds/crash.mp3");
    x.play();
    break;
    case "m":
      var x=new Audio("sounds/kick-bass.mp3");
      x.play();
      break;
    case "a":
    var x=new Audio("sounds/snare.mp3");
    x.play();
      break;
    case "g":
    var x=new Audio("sounds/tom-1.mp3");
    x.play();
      break;
    case "i":
    var x=new Audio("sounds/tom-2.mp3");
    x.play();
      break;
    case "n":
    var x=new Audio("sounds/tom-3.mp3");
    x.play();
      break;
    case "e":
    var x=new Audio("sounds/tom-4.mp3");
    x.play();
      break;
  }
}
function animation(key){
  var x=document.querySelector("."+key);
  x.classList.add("pressed");

  setTimeout(function () {
    x.classList.remove("pressed");
  },100);
}
