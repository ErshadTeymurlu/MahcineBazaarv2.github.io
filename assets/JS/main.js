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
    let countDate = new Date("August 2, 2022 15:27:00").getTime();
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
    else if (textDay == 1) $(".countdown").text(`${textDay} Day`);
    else if (textDay >= 2) $(".countdown").text(`${textDay} Days`);
    console.log(`${textHour}:${textMinute}:${textSecond}`)
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
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 6,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                loop: false
            }
        }
    });
});
$(document).ready(function () {
    $(".owlCarousel").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                loop: false
            }
        }
    });
});
