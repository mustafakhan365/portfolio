jQuery(document).ready(function() {
    jQuery('.nav-item').mouseover(function(){
        jQuery('.nav-item').css("opacity","0.5");
        jQuery(this).css("opacity","1");
    });
    jQuery('.nav-item').mouseout(function(){
        jQuery('.nav-item').css("opacity","1");
    });
    jQuery('.closemenu').on('click touchstart', function() {
        jQuery('.navbar-collapse').removeClass('show');
        jQuery('.navbar-toggler').addClass('collapsed');
        jQuery('.navbar-toggler').attr('aria-expanded', 'false');
    });
});