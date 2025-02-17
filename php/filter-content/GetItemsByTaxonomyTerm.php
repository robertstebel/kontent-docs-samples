<?php
// DocSection: filtering_get_items_by_taxonomy_term
// Note: Filters work with codenames of the tags.
// Gets items tagged with one specific tag
$items = $client->getItems((new QueryParams())
  ->contains('elements.tags', ['kontent_ai']));

// Gets items tagged with a list of specific tags
$items = $client->getItems((new QueryParams())
  ->all('elements.tags', ['kontent_ai','platform']));

// Gets items tagged with at least one of multiple tags
$items = $client->getItems((new QueryParams())
  ->any('elements.tags', ['modular','platform']));
// EndDocSection
?>