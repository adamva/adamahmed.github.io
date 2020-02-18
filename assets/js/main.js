const sections = document.querySelectorAll('li a');
$(document).ready(() => {

    //Hide and show the sidebar
    $('#sidebarCollapse').click(() => {
        $('#sidebar').toggleClass('hidden');
    });
    $('a.section').on('click', function () {
        toggleActiveSection(sections, this);
    });

    //Activate correct section in sidebar on scroll
    $(window).on('resize scroll', function() {
        if($('section#intro').isInViewport()){
            toggleActiveSection(sections, $('a#intro-link'));
        } else if($('section#portfolio').isInViewport()){
            toggleActiveSection(sections, $('a#portfolio-link'));
        } else if($('section#about').isInViewport()){
            toggleActiveSection(sections, $('a#about-link'));
        } else if($('section#contact').isInViewport()){
            toggleActiveSection(sections, $('a#contact-link'));
        }
    });
});

function toggleActiveSection(links, activeLink) {
    links.forEach(link =>{
        $(link).removeClass('active');
    });
    $(activeLink).addClass('active');
}


//Check if element is halfway inside the view port
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementMiddle = elementTop + Math.floor($(this).outerHeight() / 2);
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementMiddle > viewportTop && elementTop < viewportBottom;
};