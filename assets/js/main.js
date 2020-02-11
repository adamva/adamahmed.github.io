$('.link').click(function (e) {
    $('.link').each(function () { 
         $(this).removeClass('link-selected');
    });
    $(this).addClass('link-selected');
});

$('#toggle-sidebar').click(function (e) {
    $('#sidebar').toggleClass('d-none');
    $('#content').toggleClass('col-7 col-sm-8 col-md-9 col-lg-10');
    $('#content').toggleClass('col');
});
