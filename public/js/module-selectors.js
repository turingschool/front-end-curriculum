$(function() {
  initializeLocalStorage();
  let modulePreference = getModulePreference();
  activateButton(modulePreference);
  showOrHideModuleContainer(modulePreference, 0);

  $('.module-selector').on('click', function(event) {
    let previousModulePreference = getModulePreference();
    deactivateButton(previousModulePreference);

    let selection = $(event.target).data('module');
    setModulePreference(selection);
    activateButton(selection);
    showOrHideModuleContainer(selection, 100);
  });

  function initializeLocalStorage() {
    if (localStorage.getItem('turing-fe-modulePref') === null) {
      localStorage.setItem('turing-fe-modulePref', 0);
    }
  };

  function showOrHideModuleContainer(moduleSelection, ease) {
    if (moduleSelection == 0) { return $('.module-content').show(ease) };

    $('.module-content').each(function(idx, moduleContainer) {
      if ($(moduleContainer).data('module') == moduleSelection) {
        $(moduleContainer).show(ease);
      } else {
        $(moduleContainer).hide(ease);
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