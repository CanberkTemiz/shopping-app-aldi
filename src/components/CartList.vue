<template>
    <h2>Shopping Cart</h2>
    <div v-if="cartStore.cart.length" class="ui celled list cart-list">
        <CartItem v-for="item in cartItems" :item="item" :key="item.id" />
        <h3 v-if="cartItems.length"> Total Amount: {{ cartStore.getTotalAmount }} $ </h3>
    </div>
    <div v-else>
        <p>Basket is empty...</p>
    </div>
</template>

<script setup>
import CartItem from './CartItem.vue';
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();
const cartItems = cartStore.cart;

</script>

<style scoped>
.cart-list {
    width: 50%;
}
</style>