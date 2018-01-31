$(function() {
  initializeLocalStorage();
  let modulePreference = getModulePreference();
  activateButton(modulePreference);
  showOrHideLessonContainer(modulePreference, 0);

  $('.module-selector').on('click', function(event) {
    let previousModulePreference = getModulePreference();
    deactivateButton(previousModulePreference);

    let selection = $(event.target).data('module');
    setModulePreference(selection);
    activateButton(selection);
    showOrHideLessonContainer(selection, 100);
  });

  function initializeLocalStorage() {
    if (localStorage.getItem('turing-fe-modulePref') === null) {
      localStorage.setItem('turing-fe-modulePref', 0);
    }
  };

  function showOrHideLessonContainer(moduleSelection, ease) {
    if (moduleSelection == 0) { return $('.lesson-container').show(ease) };

    $('.lesson-container').each(function(idx, lessonContainer) {
      if ($(lessonContainer).data('module') == moduleSelection) {
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

  function setModulePreference(selection) {
    localStorage.setItem('turing-fe-modulePref', selection);
  };

  function getModulePreference() {
    return localStorage.getItem('turing-fe-modulePref');
  };
}());