

setInterval(nowTime, 100)
  let now = moment().format('');

function nowTime(){
    let  current = moment();
    $('#day-time').text(current.format('dddd, MMMM Do'));
   
    
$('.textarea').each(function(){
    let block = $(this).attr('dataNumber');
    if(now === block){
        $(this).addClass('bg-secondary');
        $(this).removeClass('bg-danger');
        $(this).removeClass('bg-success');
    } else if (now > block){
        $(this).addClass('bg-danger');
        $(this).removeClass('bg-success');
        $(this).removeClass('bg-secondary');
    } else if (now < block) {
        $(this).addClass('bg-success');
        $(this).removeClass('bg-danger');
        $(this).removeClass('bg-secondary');
    }

console.log(block);
console.log(now);

    })
}


$('.clear').on('click', function(){
    localStorage.clear();
    window.location.reload()
});


let tTime;
let hourlyTime;

$('button').on('click', delegateT);

function delegateT(event){
    let selection = event.target;
    hTask = selection.previousElementSibling.value;
    tTime = selection.dataset.number;
    console.log(tTime);

    localStorage.setItem(tTime, hourlyTime);
}

function pull(){
    $("#nine .textarea").val(localStorage.getItem('9'));
    $("#ten .textarea").val(localStorage.getItem('10'));
    $("#eleven .textarea").val(localStorage.getItem('11'));
    $("#twelve .textarea").val(localStorage.getItem('12'));
    $("#one .textarea").val(localStorage.getItem('1'));
    $("#two .textarea").val(localStorage.getItem('2'));
    $("#three .textarea").val(localStorage.getItem('3'));
    $("#four .textarea").val(localStorage.getItem('4'));
    $("#five .textarea").val(localStorage.getItem('5'));
    
}






    

// let nineam = document.querySelector("#nine");
// nineam.time = 9;
// let tenam = document.querySelector("#ten");
// tenam.time = 10;
// let elevenam = document.querySelector("#eleven");
// elevenam.time = 11;
// let twelve = document.querySelector("#twelve");
// twelve.time = 12;
// let onepm = document.querySelector("#one");
// onepm.time = 1;
// let twopm = document.querySelector("#two");
// twopm.time = 2;
// let threepm = document.querySelector("#three");
// threepm.time = 3;
// let fourpm = document.querySelector("#four");
// fourpm.time = 4;

// let hourArray = [nineam, tenam, elevenam, twelve, onepm, twopm, threepm, fourpm];


// time highlight logic

// let hourlySchedule;

// currentHour();

// function currentHour() {

//     for (let i = 0; i < hourArray.length; i++) {
//         hourlySchedule = hourArray[i].time;

//         if (moment().hours() === hourlySchedule) {
//             hourArray[i].setAttribute("style", "background-color: red");
//             console.log()
//         } else if (moment().hours() < hourlySchedule) {
//             hourArray[i].setAttribute("style", "background-color: green");
//         } else if (moment().hours() > hourlySchedule) { 
//            hourArray[i].setAttribute("style", "background-color: grey");
//         }
//     }    
// }




// hitSubmit();

// // TODO: local storage
// function hitSubmit(){
//  if (localStorage.getItem)   localStorage.setItem([dataNumber='9'], JSON.stringify([dataNumber='9']));
//     console.log(localStorage);

// window.onload = function(){
// submitButton = document.getElementsById("submit");
// submitButton.onclick = hitSubmit;
// }};


// console.log("local storage");
// for (i = 0; i < localStorage.length; i++)   {
//     console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
// };