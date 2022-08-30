import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import SearchPage from '~/pages/google/search-page';
import SearchResultsPage from '~/pages/google/search-results-page';

Given(`I'm at the search page`, () => {
  SearchPage.visit();
});

When(`I type {string} in search`, (searchTerm: string) => {
  SearchPage.search(searchTerm);
});

Then(`there is a search bar`, () => {
  SearchPage.hasSearchBar();
});

Then(`I'm taken to a results page`, () => {
  SearchResultsPage.expect().toBeOnPage();
});
