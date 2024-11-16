var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};



function first(){
  document.body.style.backgroundImage="url('Capture.PNG')"
}

let a=document.getElementById("first");
function first(){
  a.style.display="none";
  b.style.display="block";
}
let secret math.floor (math.random()*10+1)
let gusse =0;
let mat=10;
function number (){
  let user =prompt("guess a number");
  gusse++;
  if (user==secret){
    alert("congratulation");

  }
else{
  alert("wrong answer");
}
document.write("attmpts:-$gusse/${max}");
if (gusse>=max&&user!=secret){
  alert("game over");
}
number();
}
number();
for (let i = 1; i <= 9; i++) {
  console.log(i);
}
