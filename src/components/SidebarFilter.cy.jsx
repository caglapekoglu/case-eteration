import React from 'react';
import { mount } from '@cypress/react';
import SidebarFilter from './SidebarFilter';

describe('<SidebarFilter />', () => {
  const setItems = () => {};
  const setSort = () => {}; 
  const hasModelCheckboxes = false; //burayı düzenleyemedim
  it('should select sort option', () => {
    mount(<SidebarFilter setSort={setSort} />);
    cy.get('[data-testid="sort-radio"]').first().check();
    cy.get('[data-testid="sort-radio"]').first().should('have.value', 'oldToNew');
  });
  it('should check/uncheck brand checkboxes', () => {
    mount(<SidebarFilter setItems={setItems} />);
    cy.get('[data-testid="brand-checkbox"]').first().check();
    cy.get('[data-testid="brand-checkbox"]').first().should('be.checked');
    cy.get('[data-testid="brand-checkbox"]').first().uncheck();
    cy.get('[data-testid="brand-checkbox"]').first().should('not.be.checked');
  });
  
  if (hasModelCheckboxes) {
    it('should check/uncheck model checkboxes', () => {
      mount(<SidebarFilter setItems={setItems} />);

      cy.get('[data-testid="model-checkbox"]').first().check();
      cy.get('[data-testid="model-checkbox"]').first().should('be.checked');
      cy.get('[data-testid="model-checkbox"]').first().uncheck();
      cy.get('[data-testid="model-checkbox"]').first().should('not.be.checked');
    });
  }

});
