import React from 'react';
import { mount } from '@cypress/react';
import { Provider } from 'react-redux';
import store from '../store/Store'; // Redux store yolunu doğru şekilde güncelleyin
import { MemoryRouter } from 'react-router-dom'; // Sayfa yönlendirmeleri için
import HomePage from './HomePage';

describe('<HomePage />', () => {
  it('renders correctly', () => {
    mount(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage value="" />
        </MemoryRouter>
      </Provider>
    );
    cy.wait(1000);
    cy.get('[data-testid="sidebar-filter"]').should('exist');
    cy.wait(1000);
    // Ürünlerin listelendiği bölüm var mı kontrol ediliyor
    cy.get('[data-testid="product-list"]').should('exist');
    cy.wait(1000);
    // Cart bileşeni var mı kontrol ediliyor
    cy.get('[data-testid="cart"]').should('exist');
  });

  it('displays products with pagination', () => {
    const sampleProducts = [
      { id: 1, name: 'Product 1', price: 10, createdAt: '2023-08-01' },
      { id: 2, name: 'Product 2', price: 20, createdAt: '2023-08-02' },
      // ... diğer ürünler
    ];

    cy.wrap(sampleProducts).then((products) => {
      // Redux store'a örnek ürün verileri gönderiliyor
      store.dispatch({ type: 'items/setProducts', payload: products });

      mount(
        <Provider store={store}>
          <MemoryRouter>
            <HomePage value="" />
          </MemoryRouter>
        </Provider>
      );

      // Ürünlerin sayfada doğru şekilde listelendiğini kontrol ediyoruz
      products.forEach((product) => {
        cy.contains(product.name).should('be.visible');
      });

      // Sayfalama düğmelerinin sayfada görüntülendiğini kontrol ediyoruz
      cy.get('[]').should('have.length', Math.ceil(products.length / 12));
    });
  });

  // Diğer test senaryolarını burada devam ettirebilirsiniz
});
