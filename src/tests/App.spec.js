import { nextTick } from 'vue';
import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ProductView from '../views/ProductView.vue'
import CartView from '../views/CartView.vue'

import ProductItem from '../components/ProductItem.vue'
import {useCartStore} from '../store/cart.js'
import { createPinia } from 'pinia';

const routes = [
  { path: '/', redirect: '/products' },
  { path: '/products', component: ProductView },
  { path: '/cart', component: CartView },
];

// Custom function to create a test wrapper
function createTestWrapper(component, props) {
  const router = createRouter({ history: createWebHistory(), routes: [] });
  const pinia = createPinia();
  const wrapper = mount(component, {
    props,
    global: {
      plugins: [router, pinia],
    },
  });
  return { wrapper, router };
}



test('renders two navigation menu items', async () => {
  // const wrapper = mount(App, { global: { plugins: [router, pinia] } });
  const { wrapper, router } = createTestWrapper(App, [])
  await router.isReady();

  const menuItems = wrapper.findAll('.ui.fluid.two.item.menu .item');
  expect(menuItems.length).toBe(2);
});

// Test case for adding an element to the cart
test('adds an element to the cart when clicking "Add Cart"', async () => {
  const product = {
    id: '1',
    name: 'Sample Product',
    price: 10,
    img: 'https://example.com/sample-product.jpg',
    availableAmount: 10,
    minOrderAmount: 1,
  };

  const {wrapper} = createTestWrapper(ProductItem , { product });
  const addButton = wrapper.find('button.myButton');
  await addButton.trigger('click');
  const cartStore = useCartStore();

  expect(cartStore.cart).toHaveLength(1);
});