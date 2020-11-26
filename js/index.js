$('.open').click(function(){
    $('.homeContent').animate({marginLeft: '250px'} , 1000);
    $('#myNavBar').animate({width: '250px'} , 1000);
})
$('.closeBtn').click(function(){
    $('.homeContent').animate({marginLeft: '0'} , 1000);
    $('#myNavBar').animate({width: '0'} , 1000);
})
$('#myNavBar a').click(function(){
    let aHref = $(this).attr('href');
    let sectionOffset = $(aHref).offset().top;
    $('html , body').animate({scrollTop: sectionOffset} , 1500);
})
let h3Item = $('#details h3');
h3Item.click(function(){
    $(this).next().slideToggle(500);
    $("#details div").not($(this).next()).slideUp(500);
})
$("textarea").keyup(function(){
    let maxNumber = 100;
    let textLength = $(this).val().length;
    let counter = maxNumber - textLength;
    if(textLength > maxNumber)
    {
        $('#number').text("your available character finished ");
    }
    else
    {
        $('#number').text(counter);
    }

})
function checkTime(i) {
    if (i < 10) 
    {
        i = "0" + i;
    }
    return i;
}
function startTime(){
    var todayDate = new Date(),
    eventDate = new Date(2020,12,20 ),
    todayTime = todayDate.getTime(),
    eventTime = eventDate.getTime(),
    remainTime = eventTime - todayTime,
    s = Math.floor(remainTime / 1000),
    m = Math.floor(s / 60),
    h = Math.floor(m / 60),
    d = Math.floor(h / 24)-30;
	h %= 24;
	m %= 60;
    s %= 60;
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    $("#days h3").text( d + '-D');
    $("#hours h3").text( h + '-H');
    $("#minutes h3").text( m + '-M');
    $("#seconds h3").text( s + '-S');

    setInterval(startTime, 1000);
}
startTime();