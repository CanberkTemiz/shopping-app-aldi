<template>
    <div class="product-list">
        <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>
<script setup>
import ProductItem from './ProductItem.vue'
import { computed } from 'vue'
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();
const products = computed(() => cartStore.products);

</script>

<style scoped>
.product-list {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}
</style>