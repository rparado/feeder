(function($) {
    'use strict';
    $(function() {
        $('.toggle-menu').jPushMenu({
            closeOnClickOutside: false,
            closeOnClickLink   : false
        });
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 54)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });
        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#Header',
            offset: 1
        });
    });
})(jQuery);
