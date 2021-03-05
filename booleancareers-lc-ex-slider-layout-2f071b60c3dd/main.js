$(document).ready(function () {
    $(".prev").click(function () {
        prevImage();
    });
    $(".next").click(function () {
        nextImage();
    });
});

function nextImage() {
    var imageActive = $("img.active");
    var circleActive = $("i.active");

    imageActive.removeClass(["active"]);
    circleActive.removeClass(["active"]);

    if (imageActive.hasClass("last")) {
        $("img.first").addClass("active");
        $("i.first").addClass("active");
    }
    else {
        (imageActive.next("img").addClass("active"));
        (circleActive.next("i").addClass("active"));
       // (circleActive.prev("i").removeClass("active"));
    }
}


function prevImage() {
    var imageActive = $("img.active");
    var circleActive = $("i.active");

    imageActive.removeClass(["active"]);
    circleActive.removeClass(["active"]);

    if (imageActive.hasClass("first")) {
        $("img.last").addClass("active");
        $("i.last").addClass("active");
    }
    else {
        (imageActive.prev("img").addClass("active"));
        (circleActive.prev("i").addClass("active"));
    }
}


