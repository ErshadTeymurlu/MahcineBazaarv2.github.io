// auction categories
$(".auction-filter li a").click(function () {
    $(".auction-filter li a").removeClass("selected");
    $(this).addClass("selected");
});

$(".auction-filter li a").click(function () {
    let targeted = $(this).attr("data-target");
    $(".col-lg-3").hide();
    if ($(".col-lg-3").hasClass(targeted)) {
        $(`.col-lg-3.${targeted}`).show();
    }
});

//auction countdown
let countdown = () => {
    let countDate = new Date("Jul 31, 2022 12:27:00").getTime();
    let now = new Date().getTime();
    let gap = countDate - now;

    let second = 1000; //ms
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let textDay = Math.floor(gap / day);
    let textHour = Math.floor((gap % day) / hour);
    let textMinute = Math.floor((gap % hour) / minute);
    let textSecond = Math.floor((gap % minute) / second);

    if (textDay == 0) $(".countdown").text(`${textHour}:${textMinute}:${textSecond}`);
    else if (textDay > 0) $(".countdown").text(`${textDay} Days`);
}
setInterval(countdown, 1000);

$(".auction-menu li").click(function () {
    $(".auction-menu li").removeClass("clicked");
    $(".auction-menu li i").addClass("d-none");
    if (!$(this).hasClass("clicked")) {
        $(this).addClass("clicked");
        $(".clicked i").removeClass("d-none");
    }
});