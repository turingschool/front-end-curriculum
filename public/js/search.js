$(function(config){
  var algolia = algoliasearch(config.applicationId, config.apiKey);
  var index = algolia.initIndex(config.indexName);

  hideSearch();

  $('.clear-search img, .search-results-container img').on('click', function() {
    $('.sidebar-navigation--search input').val('');
    hideSearch();
  });

  $('.sidebar-navigation--search input').on('input', function() {
    var query = $(this).val();
    onQueryChange(query);
  });

  function onQueryChange(query) {
    if (query.length) {
      index.search(query, {'hitsPerPage': '10', 'page': '0', 'typoTolerance': 'false'}, onResult);
    } else {
      hideSearch();
    }
  };

  function onResult(err, data) {
    if (err) { return console.error(err) }
    displayResults(data);
  };

  function displayResults(data) {
    showSearch();
    $('.search-results').html('');
    if (data.hits.length) {
      renderHits(data.hits);
    } else {
      renderNoResultsFound();
    }
  };

  function renderNoResultsFound() {
    $('.search-results').append('<p>No search results for that query</p>');
  }

  function renderHits(hits) {
    hits.forEach(function(hit) {
      $('.search-results').append(hitTemplate(hit))
    });
  }

  function hitTemplate(hit) {
    return `<li>
      <a href="${hit.url}">${hit.title}</a>
      ${hit.raw_html}
    </li>`
  }

  function showSearch() {
    $('.search-results-container').show();
    $('.clear-search img').show();
  };

  function hideSearch() {
    $('.search-results-container').hide();
    $('.clear-search img').hide();
  };
}(window.ALGOLIA_CONFIG));