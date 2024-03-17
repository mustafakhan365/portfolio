jQuery(document).ready(function() {
    jQuery('.nav-item').mouseover(function(){
        jQuery('.nav-item').css("opacity","0.5");
        jQuery(this).css("opacity","1");
    });
    jQuery('.nav-item').mouseout(function(){
        jQuery('.nav-item').css("opacity","1");
    });
    jQuery('.closemenu').on('click touchstart', () => closeMobileMenu());
    checkScroll();
    jQuery(window).scroll(() => checkScroll());
    $(".viewmore").on('click touchstart', () => scrollToSection('.aboutme'));
    jQuery(".backtotop").on('click touchstart', () => scrollToSection('.myheader'));
});
function checkScroll() {
    if (jQuery(this).scrollTop() > 200) {
        jQuery("#menuheader").addClass("stickyheader");
        jQuery(".backtotop").show();
    } else {
        jQuery("#menuheader").removeClass("stickyheader");
        jQuery(".backtotop").hide();
    }
}
function scrollToSection(section) {
    jQuery('html, body').animate({
        scrollTop: section === '.mycontact' ? jQuery(section).offset().top - 50 : jQuery(section).offset().top
    }, 500);
    closeMobileMenu();
}
function closeMobileMenu() {
    jQuery('.navbar-collapse').removeClass('show');
    jQuery('.navbar-toggler').addClass('collapsed');
    jQuery('.navbar-toggler').attr('aria-expanded', 'false');
}