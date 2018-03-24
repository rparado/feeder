(function($) {
    'use strict';
    $(function() {
        $('.toggle-menu').jPushMenu({
            closeOnClickOutside: false,
            closeOnClickLink   : false
        });

        $('.mh').children().matchHeight();
        $.fn.matchHeight._maintainScroll = true;
    });
})(jQuery);
$(window).resize(function() {
    $.fn.matchHeight._update() // Update MatchHeight.js
});
