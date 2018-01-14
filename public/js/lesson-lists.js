$(function() {
  initializeLocalStorage();
  let modulePreference = getModulePreference();
  activateButton(modulePreference);
  showOrHideLessonContainer(modulePreference, 0);

  $('.module-selector').on('click', function(event) {
    let previousModulePreference = getModulePreference();
    deactivateButton(previousModulePreference);

    let moduleSelection = $(event.target).data('module');
    setModulePreference(moduleSelection);
    activateButton(moduleSelection);
    showOrHideLessonContainer(moduleSelection, 100);
  });

  function initializeLocalStorage() {
    if (localStorage.getItem('fe-curriculum-lessons') === null) {
      localStorage.setItem('fe-curriculum-lessons', JSON.stringify({showModule: 0}));
    }
  };

  function showOrHideLessonContainer(moduleSelection, ease) {
    if (moduleSelection === 0) { return $('.lesson-container').show(ease) };

    $('.lesson-container').each(function(idx, lessonContainer) {
      if ($(lessonContainer).data('module') === moduleSelection) {
        $(lessonContainer).show(ease);
      } else {
        $(lessonContainer).hide(ease);
      }
    });
  };

  function activateButton(modulePreference) {
    $(`.module-selector[data-module=${modulePreference}]`).addClass('active');
  };

  function deactivateButton(previousModulePreference) {
    $(`.module-selector[data-module=${previousModulePreference}]`).removeClass('active');
  };

  function setModulePreference(moduleSelection) {
    localStorage.setItem('fe-curriculum-lessons', JSON.stringify({showModule: moduleSelection}));
  };

  function getModulePreference() {
    return JSON.parse(localStorage.getItem('fe-curriculum-lessons')).showModule;
  };
}());