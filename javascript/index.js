var j=document.getElementsByTagName("button");

for(var i=0;i<(j.length);i++){
document.querySelectorAll("button")[i].addEventListener("click",function()
{
  check(this.innerHTML);
  buttonAnimation(this.innerHTML);
}
);
}

document.addEventListener("keydown",function(e)
{
  check(e.key);


});

function check(str)
{
  switch (str) {
    case "W":
    case "w":
     new Audio("sounds/tom-1.mp3").play();
     buttonAnimation(str);
     break;

     case "S":
     case "s":
     new Audio("sounds/tom-2.mp3").play();
     buttonAnimation(str);
     break;

     case "A":
     case "a":
     new Audio("sounds/tom-3.mp3").play();
     buttonAnimation(str);
     break;

     case "D":
     case "d":
     new Audio("sounds/tom-4.mp3").play();
     buttonAnimation(str);
     break;

     case "J":
     case "j":
     new Audio("sounds/snare.mp3").play();
     buttonAnimation(str);
     break;

     case "K":
     case "k":
     new Audio("sounds/kick-bass.mp3").play();
     buttonAnimation(str);
     break;

     case "L":
     case "l":
     new Audio("sounds/crash.mp3").play();
      buttonAnimation(str);
     break;

    default:

  }
}


function buttonAnimation(key)
{
  document.querySelector("." + key.toLowerCase()).classList.add("pressed");
setTimeout(function(){document.querySelector("." + key.toLowerCase()).classList.remove("pressed")},100);
};
