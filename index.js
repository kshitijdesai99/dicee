let random1 = Math.floor(Math.random()*6)+1;
let randomDiceImage = "dice"+random1+".png";
let randomSorceImg = "images/"+randomDiceImage;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSorceImg);

let random2 = Math.floor(Math.random()*6)+1;
let randomDiceImage2 = "dice"+random2+".png";
let randomSorceImg2 = ""+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomSorceImg2);


// if player1 wins
if (random1>random2){
  document.querySelector("h1").innerHTML = " <i class='fas fa-flag'></i> <i>Player</i> <i>1</i> <i>Wins</i>";

}

else if(random2>random1)
{
  document.querySelector("h1").innerHTML = " <i>Player</i> <i>2</i> <i>Wins</i> <i class='fas fa-flag'></i>";

}

else {
  document.querySelector("h1").innerHTML = "Draw!";
}
