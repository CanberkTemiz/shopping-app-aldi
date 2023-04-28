<template>
    <h2>Shopping Cart</h2>
    <CartItem v-for="item in cartItems" :item="item" :key="item.id" />
    <h3 v-if="cartItems.length"> Total Amount: {{ cartStore.getTotalAmount }} $ </h3>
</template>

<script setup>
import CartItem from './CartItem.vue';
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();
const cartItems = cartStore.cart;

</script>