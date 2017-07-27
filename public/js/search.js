$(function(config){
  var algolia = algoliasearch(config.applicationId, config.apiKey);
  var index = algolia.initIndex(config.indexName);

  var query;
  hideSearch();

  $('.sidebar-navigation--search input').on('input', function() {
    var query = $(this).val();
    onQueryChange(query);
  });

  function onQueryChange(query) {
    if (query.length) {
      index.search(query, {"hitsPerPage": "10", "page": "0", "typoTolerance": "false"}, onResult);
    } else {
      hideSearch();
    }
  };

  function onResult(err, data) {
    if (err) {
      console.error(err);
    } else {
      displayResults(data);
    }
  };

  function displayResults(data) {
    showSearch()
    $('.search-results').html('')
    if (data.hits.length) {
      data.hits.forEach(function(result) {
        $('.search-results').append(`<li>
                                       <a href="${result.url}">${result.title}</a>
                                       ${result.raw_html}
                                     </li>`);
      });
    } else {
      
      $('.search-results-container').append('<p>No search results for that query</p>');
    }
  };

  function showSearch() {
    $('.search-results-container').show();
  };

  function hideSearch() {
    $('.search-results-container').hide();
  };
}(window.ALGOLIA_CONFIG));