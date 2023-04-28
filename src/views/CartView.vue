<template>
  <div class="ui celled list cart">
    <CartList />
  </div>
</template>

<script setup>
import CartList from '../components/CartList.vue';

</script>

<style scoped>
.cart {
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
}
</style>