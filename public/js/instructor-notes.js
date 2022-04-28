function showInstructorNotes() {
  $('.instructor-notes-container').show();
  $('.container, nav').css('padding-left', '400px');
}

$('.instructor-notes-container').html($('.instructor-notes').html());

$('.instructor-notes-container :header').click(function(event) {
  const title = event.target.innerText;

  const topOffset = $($(`.content :header:contains(${title})`)[1]).offset().top - 40;

  $('html').animate({ scrollTop: topOffset }, 300);
});

$('.instructor-notes').hide();
$('.instructor-notes-container').hide();
