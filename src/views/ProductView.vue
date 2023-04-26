<template>
    <h1>Products Page</h1>
    <ul>
        <li v-for="product in data" :key="product.iu">
            {{ product.name }}
        </li>
    </ul>
</template>

<script setup>
import useProducts from '@/composable/useProducts.js'

const { data, fetchProducts } = useProducts();

fetchProducts();

</script>
