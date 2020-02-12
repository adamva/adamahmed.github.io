const sections = document.querySelectorAll('a.section');
console.log(sections);
$(document).ready(() => {

    //Hide and show the sidebar
    $('#sidebarCollapse').click(() => {
        $('#sidebar').toggleClass('hidden');
    });

    $('a.section').click(() => {
        sections.forEach(section => {
            $(section).removeClass('active');
        });
        $(this).addClass('active');
        
    });
});