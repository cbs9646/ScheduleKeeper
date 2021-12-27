setInterval(function() {

    let time = moment();
    $("#currentTime").text(time.format("dddd, MMMM Do"));
}, 1000);


let nineam = document.querySelector("#nine");
nineam.time = 9;
let tenam = document.querySelector("#ten");
tenam.time = 10;
let elevenam = document.querySelector("#eleven");
elevenam.time = 11;
let twelve = document.querySelector("#twelve");
twelve.time = 12;
let onepm = document.querySelector("#one");
onepm.time = 1;
let twopm = document.querySelector("#two");
twopm.time = 2;
let threepm = document.querySelector("#three");
threepm.time = 3;
let fourpm = document.querySelector("#four");
fourpm.time = 4;

const hourArray = [nineam, tenam, elevenam, twelve, onepm, twopm, threepm, fourpm];


// TODO: time highlight logic

let hourlySchedule;

currentHour();

function currentHour() {
    for (let i = 0; i < hourArray.length; i++) {
        hourlySchedule = hourArray[i].time;
        if (moment().hours() === hourlySchedule) {
            hourArray[i].setAttribute("style", "background-color: red");
        } else if (moment().hours() < hourlySchedule) {
            hourArray[i].setAttribute("style", "background-color: green");
        } else if (moment().hours() > hourlySchedule) { 
           hourArray[i].setAttribute("style", "background-color: grey");
        }
    }    
};






// TODO: local storage
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