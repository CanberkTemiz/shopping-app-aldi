<template>
    <div v-if="!cartStore.loading">
        <ProductList />
    </div>
    <LoadingSpinner v-else />
</template>

<script setup>
import ProductList from '@/components/ProductList.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();

if (!cartStore.products.length) cartStore.fetchProducts();

</script>
