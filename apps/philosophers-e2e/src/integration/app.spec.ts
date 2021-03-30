import { getGreeting } from '../support/app.po';

describe('philosophers', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to philosophers!');
  });
});
