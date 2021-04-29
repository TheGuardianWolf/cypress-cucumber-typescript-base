const SEARCH_FIELD = 'input[type=text]';
const SEARCH_BUTTON = 'input[value="Google Search"]';

class SearchPage {
  static visit = () => cy.visit('/');

  static search = (searchTerm: string) => {
    return cy.get(SEARCH_FIELD).type(searchTerm).get(SEARCH_BUTTON).eq(0).click();
  };

  static hasSearchBar = () => {
    return cy.get(SEARCH_FIELD).should('exist');
  };
}

export default SearchPage;
