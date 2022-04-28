function showInstructorNotes() {
  $('.instructor-notes-container').show();
  $('.container, nav').css('padding-left', '400px');
}

$('.instructor-notes-container').html($('.instructor-notes').html());

$('.instructor-notes-container :header').click(function(event) {
  const title = event.target.innerText;

  const targetHeader = $($(`.content :header:contains(${title})`)[1]);

  if (targetHeader.offset() !== undefined) {
    const topOffset = targetHeader.offset().top - 40;

    $('html').animate({ scrollTop: topOffset }, 300);
  }
});
