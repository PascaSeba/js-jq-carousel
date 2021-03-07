//Uso il document ready affinché il js/jq vengano letti correttamente e
//inizio a dare un nome alle mie funzioni

$(document).ready(function () {
    $(".slide_prev").click(function() {
        previous();
    })
    $(".slide_next").click(function() {
        next();
    })
});
    
    
//Ora creo le mie funzioni, al click delle freccie dovrà spuntare
//la precedente/prossima immagine.
    
function next() {
    var imagesClassActive = $("img.active");
    var sliderClassActive = $("i.active");
    
    imagesClassActive.removeClass("active");
    sliderClassActive.removeClass("active");
    
    if (imagesClassActive.hasClass("last")) {
        $("img.first").addClass("active"); //ricordare: $(selettore).azione...[...];
        $("i.first").addClass("active");
    }
    else {
        (imagesClassActive.next("img").addClass("active"));
        (sliderClassActive.next("i").addClass("active"));
    }
}

function previous() {
    var imagesClassActive = $("img.active");
    var sliderClassActive = $("i.active");
    
    imagesClassActive.removeClass("active");
    sliderClassActive.removeClass("active");
    
    if (imagesClassActive.hasClass("first")) {
        $("img.last").addClass("active");
        $("i.last").addClass("active");
    }
    else {
        (imagesClassActive.prev("img").addClass("active"));
        (sliderClassActive.prev("i").addClass("active"));
    }
}