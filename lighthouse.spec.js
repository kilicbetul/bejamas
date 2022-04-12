describe('shows the text report returned by from the plugins task', () => {
  it('Meets performance benchmarks', function () {
    cy.visit('https://qa-recruitment-task.netlify.app/')

    const customThresholds = {
      performance: 90,
      seo: 90
    };

    cy.lighthouse(customThresholds)
  })
});