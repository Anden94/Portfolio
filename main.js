$(document).ready(function (){
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function(){/* För animationen när man klickar på en meny item */
        $('html, body').animate( {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500);
        
    });

    $('#up').on('click', function(){ /* Klickar man på upp knappen tas man högst upp */
        $('html, body').animate( {
            scrollTop: 0
        }, 2000);
    });

        AOS.init({
            easing: 'ease',
            duration: 1800,
            once: true        
    });

});

