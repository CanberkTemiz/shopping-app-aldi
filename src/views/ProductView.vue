<template>
    <ProductList />
</template>

<script setup>
import ProductList from '@/components/ProductList.vue'
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();

if (!cartStore.products.length) cartStore.fetchProducts();

</script>
