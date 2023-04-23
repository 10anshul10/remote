const mode = new Audio("./Audio/Mode.mp3");
let modeaud = document.getElementsByClassName("btn1");
modeaud[0].addEventListener("click", (e) => {
    mode.play();}
);

const power = new Audio("./Audio/Power.mp3");
let poweraud = document.getElementsByClassName("btn3");
poweraud[0].addEventListener("click", (e) => {
    power.play();
});


const swing = new Audio("./Audio/Swing.mp3");
let swingaud = document.getElementsByClassName("btn4");
swingaud[0].addEventListener("click", (e) => {
    swing.play();
});



const fan = new Audio("./Audio/Fan.mp3");
let fanaud = document.getElementsByClassName("btn6");
fanaud[0].addEventListener("click", (e) => {
    fan.play();
});