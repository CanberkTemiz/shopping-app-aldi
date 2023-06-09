import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useCartStore = defineStore({
    id: "cart",
    state: () => ({
      products: [],
      cart: [],
      loading: false
    }),
    getters: {
        getTotalAmount() {
            return this.cart.reduce((acc, product) => {
                acc += product.price * product.quantity;
                return acc;
            }, 0).toFixed(2)
        }
    },
    actions: {
        addToCart(product, quantity) {
            const foundCartProduct = this.cart.find(p => product.id === p.id)
            
            if(foundCartProduct) {
                foundCartProduct.quantity += quantity;
                foundCartProduct.bulkPrice = (foundCartProduct.quantity * product.price).toFixed(2);
            } else {
                this.cart.push({...product, quantity, bulkPrice: (quantity * product.price).toFixed(2)})
            }

            const foundProduct = this.products.find(p => product.id === p.id)
            if(foundProduct) {
                foundProduct.availableAmount -= quantity;
            }
            

            toast.success('Added to Cart!')
        },
        async fetchProducts() {
            if (!this.products.length) {
                this.loading = true;
                try {
                    const response = await fetch('https://63c10327716562671870f959.mockapi.io/products');
                    if(!response) throw new Error('Error fetching data')
                    this.products = await response.json();
                } catch(err) {
                    toast.error('Failed during fething products')
                } finally {
                    this.loading = false
                }
            }
        }
    },
  });