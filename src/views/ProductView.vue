<template>
    <!-- <div v-if="cartStore.notification" class="ui success message">
        <i class="close icon"></i>
        <div class="header">
            Your user registration was successful.
        </div>
        <p>You may now log-in with the username you have chosen</p>
    </div> -->
    <ProductList />
</template>

<script setup>
import ProductList from '@/components/ProductList.vue'
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();

if (!cartStore.products.length) cartStore.fetchProducts();

</script>
