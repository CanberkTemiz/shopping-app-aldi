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
// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    availableAmount: 10,
    minOrderAmount: 1,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    availableAmount: 5,
    minOrderAmount: 2,
  },
];

// Replace fetchProducts function in useCartStore to return sampleProducts
const storeWithMockedFetchProducts = () => {
  const store = useCartStore();
  store.fetchProducts = async () => {
    store.products = sampleProducts;
  };
  return store;
};


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

test('fetches products', async () => {
  const cartStore = storeWithMockedFetchProducts();

  expect(cartStore.loading).toBe(false);
  expect(cartStore.products).toHaveLength(0);

  await cartStore.fetchProducts();

  expect(cartStore.loading).toBe(false);
  expect(cartStore.products).toHaveLength(sampleProducts.length);
});

test('adds a product to the cart', async () => {
  const cartStore = storeWithMockedFetchProducts();

  // Fetch products first
  await cartStore.fetchProducts();

  const product = cartStore.products[0];
  const initialCartLength = cartStore.cart.length;

  // Add product to cart
  cartStore.addToCart(product, product.minOrderAmount);
  expect(cartStore.cart).toHaveLength(initialCartLength + 1);
  expect(Number(cartStore.cart[0].id)).toBe(product.id);
  expect(cartStore.cart[0].quantity).toBe(product.minOrderAmount);
});