const hourArray = [nineam, tenam, elevenam, twelve, onepm, twopm, threepm, fourpm];





setInterval(function() {

    let currentTime = moment();
    $(#currentDay).text(today.format("dddd, MMMM Do"));
}, 1000);














let nineam = document.querySelector("#nine");
nine.time = 9;
let tenam = document.querySelector("#ten");
nine.time = 10;
let elevenam = document.querySelector("#eleven");
nine.time = 11;
let twelve = document.querySelector("#twelve");
nine.time = 12;
let onepm = document.querySelector("#one");
nine.time = 1;
let twopm = document.querySelector("#two");
nine.time = 2;
let threepm = document.querySelector("#three");
nine.time = 3;
let fourpm = document.querySelector("#four");
nine.time = 4;


function hitSubmit(){
    localStorage.setItem([dataNumber='9'], JSON.stringify([dataNumber='9']));
    console.log(localStorage);

window.onload = function(){
submitButton = document.getElementsById("submit");
submitButton.onclick = hitSubmit;
}};


console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
};