$(function(config){
  var algolia = algoliasearch(config.applicationId, config.apiKey);
  var index = algolia.initIndex(config.indexName);

  $('.clear-search-btn').on('click', function() {
    $('.sidebar-navigation--search input').val('');
    hideSearch();
  });

  $('.sidebar-navigation--search input').on('input', function() {
    var query = $(this).val();
    updateSearchQuery(query);
  });

  function updateSearchQuery(query) {
    if (query.length) {
      index.search(query, {
        hitsPerPage: 10,
        page: 0,
        typoTolerance: false,
        ignorePlurals: true,
        attributesToHighlight: [
          'title',
          'text'
        ],
        highlightPreTag: '<span class="search-highlight">'
      }, onResult);
    } else {
      hideSearch();
    }
  };

  function onResult(err, data) {
    if (err) { return console.error(err) }
    displayResults(data);
  };

  function displayResults(data) {
    $('.search-results').html('');
    showSearch();
    if (data.hits.length) {
      renderHits(data.hits);
    } else {
      renderNoResultsFound();
    }
  };

  function renderNoResultsFound() {
    $('.search-results').append('<p>No search results for that query</p>');
  };

  function renderHits(hits) {
    var documentFragment = $(document.createDocumentFragment());

    hits.forEach(function(hit) {
      documentFragment.append(hitTemplate(hit));
    });

    $('.search-results').append(documentFragment);
  };

  function hitTemplate(hit) {
    return `<li class="result">
              <a href="${hit.url}">${hit._highlightResult.title.value}</a>
              <p>${hit._highlightResult.text.value}</p>
            </li>`
  };

  function showSearch() {
    $('.search-results-container, .clear-search').show();
  };

  function hideSearch() {
    $('.search-results-container, .clear-search').hide();
  };
}(window.ALGOLIA_CONFIG));