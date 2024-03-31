jQuery(document).ready(function() {
    jQuery('.myheader .nav-item').click(function(){
        jQuery('.myheader .nav-item').removeClass("active");
        jQuery(this).addClass("active");
    });
    jQuery('.closemenu').on('click touchstart', () => closeMobileMenu());
    checkScroll();
    jQuery(window).scroll(() => checkScroll());
    jQuery(".viewmore").on('click touchstart', () => scrollToSection('.aboutme'));
    jQuery(".backtotop").on('click touchstart', () => scrollToSection('.myheader'));
});
function checkScroll() {
    let scrollposition = jQuery(this).scrollTop();
    if (scrollposition > 200) {
        jQuery("#menuheader").addClass("stickyheader");
        jQuery(".backtotop").show();
    } else {
        jQuery("#menuheader").removeClass("stickyheader");
        jQuery(".backtotop").hide();
    }
    if(scrollposition < (jQuery(".aboutme").offset().top - 150)) {
        highlightSection(0);
    } else if (scrollposition < (jQuery(".myprojects").offset().top - 150)) {
        highlightSection(1);
    } else if (scrollposition < (jQuery(".myexperience").offset().top - 150)) {
        highlightSection(2);
    } else if (scrollposition < (jQuery(".mycontact").offset().top - 150)) {
        highlightSection(3);
    } else { highlightSection(4); }
}
function highlightSection(index) {
    jQuery('.myheader .nav-item').removeClass("active");
    jQuery('.myheader .nav-item').eq(index).addClass("active");
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