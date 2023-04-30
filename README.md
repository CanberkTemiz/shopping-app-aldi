# Shopping App ALDI

This is a simple shopping app built using Vue3, Vite and Composition API. 
The app feauteres a shopping cart where users can add products and list.
It also includes a products view that displays a list of avaible products

## Features
- Vue 3 with Composition API
- Vite for development and building
- Pinia for state management
- Vue Router for routing
- Vue Toastification for toasts and notifications

## Prerequisites

- Node.js 14.18.x or later (some packages require at least 14.18.x, but it's recommended to use the latest LTS version)
- npm 8.x or later

## Getting Started

To install the required dependencies, run the following command in the project directory:
### Clone the repository

```sh
git clone https://github.com/your-username/shopping-app-aldi.git
```

### Change to the project directory

```sh
cd shopping-app-aldi
```

### Install the required dependencies

```sh
npm install
```

### Start the development server

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

### Run Unit Tests with Vitest

```sh
npm run test:unit
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
