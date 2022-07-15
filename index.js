// document.querySelectorAll("button").forEach.addEventListener("click",handleClick);

for(var i=0; i<document.querySelectorAll("button").length ; i++)
{
document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}
function handleClick()
{
  var a=this.innerHTML;
  buttonAnimation(a);
  switch(a)
  {
    case "w":
      var audio= new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
       var audio= new Audio("sounds/kick-bass.mp3");
       audio.play();
       break;
    case "s":
       var audio= new Audio("sounds/snare.mp3");
      audio.play();
       break;
    case "d":
    var audio= new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "j":
    var audio= new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "k":
    var audio= new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "l":
    var audio= new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
      default:
      console.log(this.innerHTML);
  }
  // alert("I got clicked");
  // var audio= new Audio('sounds/tom-1.mp3');
  // audio.play();
}

document.addEventListener("keydown", function(event){
  // console.log(event.key);
  var a= event.key;
  buttonAnimation(a);
  switch(a)
  {
    case "w":
      var audio= new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
       var audio= new Audio("sounds/kick-bass.mp3");
       audio.play();
       break;
    case "s":
       var audio= new Audio("sounds/snare.mp3");
      audio.play();
       break;
    case "e":
       var audio= new Audio("sounds/snare.mp3");
       audio.play();
    break;
    case "d":
    var audio= new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "j":
    var audio= new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "k":
    var audio= new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "l":
    var audio= new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
      default:
      console.log(event.key);
}});

function buttonAnimation(currentKey)
{
  var activeButton= document.querySelector("."+currentKey);
  // activeButton.setAttribute("class",".pressed");
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
