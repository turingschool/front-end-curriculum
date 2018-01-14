$(function() {
  if (localStorage.getItem('fe-curriculum-lessons') === null) {
    localStorage.setItem('fe-curriculum-lessons', JSON.stringify({showModule: 0}));
  }

  showOrHideLessonContainer(getLessonPreference(), 0);

  $('.lesson-selector').on('click', function(e) {
    let moduleSelection = $(e.target).data('module');
    setLessonPreference(moduleSelection);
    showOrHideLessonContainer(moduleSelection, 100);
  });

  function showOrHideLessonContainer(moduleSelection, ease) {
    if (moduleSelection === 0) { return $('.lesson-container').show() };

    $('.lesson-container').each(function(idx, el) {
      if ($(el).data('module') === moduleSelection) {
        $(el).show(ease);
      } else {
        $(el).hide(ease);
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