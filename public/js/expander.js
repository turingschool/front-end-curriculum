$('.answer h3').each(function(idx, title) {
  const titleText = $(title).text();
  $(title).replaceWith(`<h3><img class="expander-arrow" src="/assets/images/arrow.svg" alt="expander arrow" /> ${titleText}</h3>`);
});

$('.answer h3').nextAll().hide();

$('.answer h3 img.expander-arrow').on('click', function() {
  if (!$(this).hasClass('down')) {
    $(this).addClass('down');
    $('.answer h3').nextAll().show(150);
  } else {
    $(this).removeClass('down');
    $('.answer h3').nextAll().hide(150);
  }
});

