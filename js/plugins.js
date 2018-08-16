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
(function() {
  
    var lastScrollAt = Date.now()
      , timeout
  
    function scrollStartStop() {
        var $this = $(this)
      
        if (Date.now() - lastScrollAt > 100)
            $this.trigger('scrollstart')
          
        lastScrollAt = Date.now()
      
        clearTimeout(timeout)
      
        timeout = setTimeout(function() {
            if (Date.now() - lastScrollAt > 99)
            $this.trigger('scrollend')
        }, 100)
    }
    
    $(document).on('scroll', scrollStartStop)
    
  })()
