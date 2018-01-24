$(function() {

    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();

        var tag = $.attr(this, 'href'),
            pos = tag && $(tag).offset(),
            dest = pos && pos.top;

        if (dest != null) {
            closeMobileNav();
            $('html, body').animate({ scrollTop: dest }, 500);
        }
    });

    $(".nk-navbar-full-toggle").click(function(e) {
        e.preventDefault();
        $(".nk-navbar-full").css({
                "z-index": 1002
            });
    });

    $(".nk-nav-close").click(closeMobileNav);

    function closeMobileNav(e) {
        e && e.preventDefault();
        $(".nk-navbar-full").css({
                "z-index": -1
            });
    }

});
