
function hitSubmit(){
    localStorage.setItem([dataNumber='9'], JSON.stringify([dataNumber='9']));
    console.log(localStorage);

window.onload = function(){
submitButton = document.getElementsById("submit");
submitButton.onclick = hitSubmit;




}};

var i;

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

// let container = $(".container");
// let currentTime = moment();
