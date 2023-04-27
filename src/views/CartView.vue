<template>
  <div class="cart">
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ `Product: ${item.name} x ${item.quantity}` }}
      </li>
    </ul>
    <p> {{ cartStore.getTotalAmount }} </p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.cart);

</script>