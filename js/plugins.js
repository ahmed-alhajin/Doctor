/* global $, JQuery, alert*/

// Get the modal
var dal = document.getElementById('al');

// Get the button that opens the modal
var btn = document.getElementById("tn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("se")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    dal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    dal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == dal) {
        dal.style.display = "none";
    }
}


$(document).ready(function () {
   $('.carousel').carousel({
      interval:5000
   });
    // show color option div when click on the gear

    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });

    // change theme color on click

      var colorLi =$(".color-option ul li");
      colorLi
        .eq(0).css("backgroundColor","#f70408").end()
        .eq(1).css("backgroundColor","#51EAEA").end()
        .eq(2).css("backgroundColor","#f51770").end()
        .eq(3).css("backgroundColor","#768ede").end()
        .eq(4).css("backgroundColor","#f2539a");

      colorLi.click(function () {
         $("link[href*='theme']").attr("href",$(this).attr("data-value"));
      });
});

/* start scroll function*/



/* start video*/

// Get the video

var video = document.getElementById("myVide");

// Get the button
var btn = document.getElementById("myBt");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

/* End video*/

/* Start Modal Box*/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Start Loader

// End Loader
(function ($) {

    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
})(jQuery);