import {ref} from 'vue'

export default function useProducts() {
    const products = ref(null);
    // const error = ref(null);
    // const isLoading = ref(false)

    const fetchProducts = async() => {
        const response = await fetch('https://63c10327716562671870f959.mockapi.io/products');
        products.value = await response.json();
    }

    return {
        products,
        fetchProducts
    }

}