$('.sidebar-navigation--links li').each(function(idx, link) {
  var currentPath = window.location.pathname;
  var linkPath = $(link).find('a').attr('href');

  if (currentPath.includes(linkPath)) {
    $(link).toggleClass('active-link');
  }
});