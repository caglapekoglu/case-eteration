import React from 'react'
import SidebarFilter from './SidebarFilter'

describe('<SidebarFilter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SidebarFilter />)
  })
})