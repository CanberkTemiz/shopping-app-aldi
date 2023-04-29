<template>
    <div class="ui cards product-list">
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
    justify-content: center;
}
</style>