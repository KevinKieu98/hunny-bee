document.addEventListener("DOMContentLoaded", () => {
    if($('.image-zoom')) {
        $('.image-zoom')
        .wrap('<span style="display:inline-block"></span>')
        .css('display', 'block')
        .parent()
        .zoom({
          url: $(this).find('img').attr('data-zoom'),
          magnify: 2
        })
    }
})