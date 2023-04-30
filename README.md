# Shopping App ALDI

This is a simple shopping app built using Vue3, Vite and Composition API. 
The app feauteres a shopping cart where users can add products and list.
It also includes a products view that displays a list of avaible products

## 🚀 Features
- Vue 3 with Composition API
- Vite for development and building
- Pinia for state management
- Vue Router for routing
- Vue Toastification for toasts and notifications
- Vitest for the testing

## ⚙️ Core Functionality
- Product and Cart Pages: The app has two main pages, /products and /cart.
- Product Page: The Product page lists all products and their information, and enables adding each individual product to the cart in various amounts, respecting the minOrderAmount.
When a product is added to the cart, its available amount is decremented by the amount added. Adding more than the total amount is not possible.
- Cart Page: The Cart page displays the products added to the cart, including the total amount currently added and the total price.

## 📋 Prerequisites

- Node.js 14.18.x or later (some packages require at least 14.18.x, but it's recommended to use the latest LTS version)
- npm 8.x or later

## 🛠️ Installation

### Clone the repository

```sh
git clone https://github.com/yourusername/shopping-app-aldi.git
```

### Change to the project directory

```sh
cd shopping-app-aldi
```

### Install the required dependencies

```sh
npm install
```

### 🎮 Usage
### Running the Development Server

```sh
npm run dev
```

### Building for Production

```sh
npm run build
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
