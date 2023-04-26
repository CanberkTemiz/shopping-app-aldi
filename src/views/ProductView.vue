<template>
    <h1>Products Page</h1>
    <ProductList :products="products" />
</template>

<script setup>
import ProductList from '@/components/ProductList.vue'
import useProducts from '@/composable/useProducts.js'

const { products, fetchProducts } = useProducts();

fetchProducts();

</script>
