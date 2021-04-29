class SearchResultsPage {
  static expect = () => {
    return {
      toBeOnPage: () => cy.location('pathname').should('equal', '/search'),
    };
  };
}

export default SearchResultsPage;
