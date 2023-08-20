import React from 'react';
import { mount } from '@cypress/react';
import { Provider } from 'react-redux';
import store from '../../store/Store';
import Cart from './Cart';

describe('<Cart />', () => {
  it('renders with no items', () => {
    mount(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    cy.contains('There are no items in your cart yet!').should('be.visible');
  });

  it('renders with items', () => {
    const sampleItems = [
      { id: 1, name: 'Product 1', price: 10, quantity: 2 },
      { id: 2, name: 'Product 2', price: 20, quantity: 1 },
    ];

    cy.wrap(sampleItems).then((items) => {
      // Redux store'a örnek ürün verileri gönderiliyor
      store.dispatch({ type: 'card/setCardItems', payload: items });

      mount(
        <Provider store={store}>
          <Cart />
        </Provider>
      );

      // Render edilen ürünlerin isimleri kontrol ediliyor
      items.forEach((item, index) => {
        cy.contains(item.name).should('be.visible');
      });
    });
  });
});
