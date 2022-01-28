// pull();

setInterval(nowTime, 1000)
  let now = moment().format('HH');

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
    hourlyTime = selection.previousElementSibling.value;
    tTime = selection.dataset.number;
    console.log(tTime);

    localStorage.setItem(tTime, hourlyTime);
}

function pull(){
    $("#nine .textarea").val(localStorage.setItem('9'));
    $("#ten .textarea").val(localStorage.getItem('10'));
    $("#eleven .textarea").val(localStorage.getItem('11'));
    $("#twelve .textarea").val(localStorage.getItem('12'));
    $("#thirteen .textarea").val(localStorage.getItem('13'));
    $("#fourteen .textarea").val(localStorage.getItem('14'));
    $("#fifteen .textarea").val(localStorage.getItem('15'));
    $("#sixteen .textarea").val(localStorage.getItem('16'));
    $("#seventeen .textarea").val(localStorage.getItem('17'));
    
}






    






