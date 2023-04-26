import {ref} from 'vue'
export default function useProducts() {
    const data = ref(null);
    // const error = ref(null);
    // const isLoading = ref(false)

    const fetchProducts = async() => {
        const response = await fetch('https://63c10327716562671870f959.mockapi.io/products');
        data.value = await response.json();
    }

    return {
        data,
        fetchProducts
    }

}