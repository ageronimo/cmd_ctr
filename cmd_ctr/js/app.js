var huh = document.getElementById("box");
var msg = document.getElementById("hidden");
var huh2 = document.getElementById("box2");
// idk what i'm doing
// do i even have to name it

// events: ondblclick & onmouseover

function stopClicking() {
  huh.style.transition = "all 0.5s";
  huh.style.color = "white";
  msg.style.color = "white";
  huh.style.backgroundColor = "white";
  huh.style.width = "100px";
  huh.style.height = "100px";
}

function dontGo() {
  huh.style.transition = "all 0.5s";
  huh.style.backgroundColor = "red";
  huh.style.color = "black";
  msg.style.color = "black";
  huh.style.width = "600px";
  huh.style.height = "600px";
}