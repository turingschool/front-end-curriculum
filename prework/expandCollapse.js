var expanders = $('.expander-btn');

$.each(expanders, function(index, expander){
    $(expander).on('click', function(){
        var $content = $(this).next('.expander-content');
        $content.slideToggle(400);

        $(this).find('.arrow-right').toggleClass('down');
    })
})
