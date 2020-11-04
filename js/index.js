$(document).ready(()=> {

    AOS.init({
        duration: 1500,
    });

    // // Size Of The Entire HTML Document - Won't Change Unless Content Is Added/Removed
    // let pageTop = $(document).height();
    // let pageBottom = $(document).width();

    // // Size Of Screen - Changes Based On What The User Actually Sees
    // let screenHeight = $(window).height();
    // let screenWidth = $(window).width();
    

    let menuOpen = false;

    $("#computer-menu-button").click(()=> { toggleNav(menuOpen); });

    function toggleNav() {

        if (menuOpen == true ) // Close The Nav Bar
        {
            $("#openNavScreen").css("width", "0%");
            $("#navbar").css("zIndex", "101");
            $("#computer-menu-buttontext").css("color", "#8B8B8B");
            menuOpen = false;
        }
        else
        {
            $("#openNavScreen").css("width", "36.5%");
            $("#navbar").css("zIndex", "101");
            $("#computer-menu-buttontext").css("color", "#FED777");
            $("#openNavScreen").addClass(" openmenutransform");
            menuOpen = true;
        }
    }

    $("#contactus").click(() => { $([document.documentElement, document.body]).animate({ scrollTop: $("#contact-section").offset().top + 1 }, 1000); });
    $("#viewprojects").click(() => { $([document.documentElement, document.body]).animate({ scrollTop: $("#project-section").offset().top + 1 }, 1000); });
    $("#testimonials").click(() => { $([document.documentElement, document.body]).animate({ scrollTop: $("#computer-testimonial-section").offset().top + 1 }, 1000); });


});

function openNav() { $("#navbar").css("width", "100vw"); }

function closeNav() { $("#navbar").css("width", "0vw"); }
