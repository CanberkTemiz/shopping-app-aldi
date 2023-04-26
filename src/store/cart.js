import { defineStore } from "pinia";

export const useCartStore = defineStore({
    id: "cart",
    state: () => ({
      products: [],
      cart: []
    }),
    getters: {
        getTotalAmount() {
            return this.cart.reduce((acc, product) => {
                acc += product.price * product.quantity;
                return acc;
            }, 0)
        }
    },
    actions: {
        setProducts(products) {
            this.products = products;
        },
        addToCart(product, quantity) {
            const foundCartProduct = this.cart.find(p => product.id === p.id)
            foundCartProduct ? foundCartProduct.quantity += quantity : this.cart.push({...product, quantity})

            const foundProduct = this.products.find(p => product.id === p.id)
            foundProduct.availableAmount -= quantity;
        },
        async fetchProducts() {
            const response = await fetch('https://63c10327716562671870f959.mockapi.io/products');
            this.products = await response.json();
        }
    },
  });