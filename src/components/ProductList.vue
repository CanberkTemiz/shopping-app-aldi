<template>
    <div class="product-list">
        <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue'
const props = defineProps({
    products: []
})
</script>

<style scoped>
.product-list {
    display: grid;
    grid-template-columns: auto auto auto;
}
</style>