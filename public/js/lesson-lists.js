$(function() {
  if (localStorage.getItem('fe-curriculum-lessons') === null) {
    localStorage.setItem('fe-curriculum-lessons', JSON.stringify({showModule: 0}));
  }

  showOrHideLessonContainer(getLessonPreference());

  $('.lesson-selector').on('click', function(e) {
    let moduleSelection = $(e.target).data('module');
    setLessonPreference(moduleSelection);
    showOrHideLessonContainer(moduleSelection);
  });

  function showOrHideLessonContainer(moduleSelection) {
    if (moduleSelection === 0) { return $('.lesson-container').show() };

    $('.lesson-container').each(function(idx, el) {
      if ($(el).data('module') === moduleSelection) {
        $(el).show();
      } else {
        $(el).hide();
      }
    });
  };

  function setLessonPreference(moduleSelection) {
    localStorage.setItem('fe-curriculum-lessons', JSON.stringify({showModule: moduleSelection}));
  };

  function getLessonPreference() {
    return JSON.parse(localStorage.getItem('fe-curriculum-lessons')).showModule;
  };
}());