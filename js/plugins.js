// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// jQuery scroll start stop
// (function() {
  
//     var lastScrollAt = Date.now()
//       , timeout
  
//     function scrollStartStop() {
//         var $this = $(this)
      
//         if (Date.now() - lastScrollAt > 100)
//             $this.trigger('scrollstart')
          
//         lastScrollAt = Date.now()
      
//         clearTimeout(timeout)
      
//         timeout = setTimeout(function() {
//             if (Date.now() - lastScrollAt > 99)
//             $this.trigger('scrollend')
//         }, 100)
//     }
    
//     $(document).on('scroll', scrollStartStop)
    
// })()

// anchor smooth scrolling
$(document).ready(function() {
    if(window.location.hash) {
        var hash = window.location.hash;
        
        smoothScroll(hash);
    }

    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        smoothScroll(target);
        
        return false;
    });

    function smoothScroll(target) {
        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 300, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });
    }
});

$(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
    
        // Assign active class to nav links while scolling
        $('.page-section').each(function(i) {
                if ($(this).position().top <= (scrollDistance + 50)) {
                        $('.page-nav li.active').removeClass('active');
                        $('.page-nav li').eq(i).addClass('active');
                }
        });
}).scroll();

// boxLoader
$(document).ready(function() {
    $(window).scrollTop(1);
    $(".handle-box").boxLoader({
        direction:"x",
        position: "100%",
        effect: "fadeIn",
        duration: "1s",
        windowarea: "100%"
    });
    $(".hero header").boxLoader({
        direction:"x",
        position: "-100%",
        effect: "fadeIn",
        duration: "1s",
        windowarea: "100%"
    });
    $("header h2").boxLoader({
        direction:"none",
        position: "none",
        effect: "fadeIn",
        duration: "2s",
        windowarea: "100%"
    });
    $(".page-section figure img").boxLoader({
        direction:"y",
        position: "100%",
        effect: "fadeIn",
        duration: "1s",
        windowarea: "100%"
    });
    $(".contact-form h3").boxLoader({
        direction:"none",
        position: "none",
        effect: "fadeIn",
        duration: "2s",
        windowarea: "100%"
    });
    $(".contact-form figure").boxLoader({
        direction:"none",
        position: "none",
        effect: "fadeIn",
        duration: "2s",
        windowarea: "100%"
    });
});