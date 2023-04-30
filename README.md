# Shopping App ALDI

This is a simple shopping app built using Vue3, Vite and Composition API. 
The app feauteres a shopping cart where users can add products and list.
It also includes a procuts view that displays a list of avaible products

## Features
- Vue 3 with Composition API
- Vite for development and building
- Pinia for state management
- Vue Router for routing
- Vue Toastification for toasts and notifications

## Core Functionality

1. **Product and Cart Pages**: The app has two main pages, `/products` and `/cart`.
2. **Product Page**: The Product page lists all products and their information, and enables adding each individual product to the cart in various amounts, respecting the `minOrderAmount`.
   - When a product is added to the cart, its available amount is decremented by the amount added. Adding more than the total amount is not possible.
3. **Cart Page**: The Cart page displays the products added to the cart, including the total amount currently added and the total price.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
## Folder Structure

```
src
  ├── components
  │   ├── CartItem.vue
  │   ├── CartList.vue
  │   ├── LoadingSpinner.vue
  │   ├── ProductItem.vue
  │   ├── ProductList.vue
  ├── composable
  │   ├── useInputValidation.js
  ├── router
  │   ├── index.js
  ├── store
  │   ├── cart.js
  ├── views
  │   ├── CartView.vue
  │   ├── ProductView.vue
  └── App.vue
```
