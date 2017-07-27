$(function(config){
  var algolia = algoliasearch(config.applicationId, config.apiKey);
  var index = algolia.initIndex(config.indexName);

  var query;
  $('.search-results-container').hide();

  $('.sidebar-navigation--search input').on('input', function() {
    var query = $(this).val();
    onQueryChange(query);
  });

  function onQueryChange(query) {
    if (query.length) {
      index.search(query, {"hitsPerPage": "10", "page": "0", "typoTolerance": "false"}, onResult);
    } else {
      $('.search-results-container').hide();
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
    $('.search-results').text('')
    $('.search-results-container').show();
    if (data.hits.length) {
      data.hits.forEach(function(result) {
        $('.search-results').append(`<li>
                                       <a href="${result.url}">${result.title}</a>
                                       ${result.raw_html}
                                     </li>`);
      });
    } else {
      console.log('No results')
      $('.search-results').append('<li>No search results for that query</li>');
    }
  };
}(window.ALGOLIA_CONFIG));