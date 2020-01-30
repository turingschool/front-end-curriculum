$('.answer h3').each(function(idx, title) {
  const titleText = $(title).text();
  $(title).replaceWith(`<h3><img class="expander-arrow" src="/assets/images/arrow.svg" alt="expander arrow" /> ${titleText}</h3>`);
});

$('.answer h3').nextAll().hide();

$('.answer h3').on('click', function() {
  let arrowEl = $(this).find('img.expander-arrow');
  
  if (!arrowEl.hasClass('expanded')) {
    arrowEl.addClass('expanded');
    arrowEl.parent('h3').nextAll().show(150);
  } else {
    arrowEl.removeClass('expanded');
    arrowEl.parent('h3').nextAll().hide(150);
  }
});
