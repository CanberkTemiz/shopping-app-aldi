<template>
    <div class="ui cards">
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
.ui.cards {
    margin: 10px;
    justify-content: center;
}
</style>