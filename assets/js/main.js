$('.link').click(function (e) {
    $('.link').each(function () { 
         $(this).removeClass('link-selected');
    });
    $(this).addClass('link-selected');
});