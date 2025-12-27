// dice 2
let randomNumber2=Math.floor(Math.random()*6)+1;
if(randomNumber2==1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if(randomNumber2==2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
else if(randomNumber2==3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
else if(randomNumber2==4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
else if(randomNumber2==5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
else {
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}
// dice 1
let randomNumber=Math.floor(Math.random()*6)+1;
if(randomNumber==1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(randomNumber==2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if(randomNumber==3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
else if(randomNumber==4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
else if(randomNumber==5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}
else {
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}
// display winner
if(randomNumber>randomNumber2){
    document.querySelector(".container").firstElementChild.innerText="🏆 Player1 Wins";
}
else if(randomNumber<randomNumber2){
    document.querySelector(".container").firstElementChild.innerText="🏆 Player2 Wins";
}
else{
    document.querySelector(".container").firstElementChild.innerText="Its a Draw !";
}