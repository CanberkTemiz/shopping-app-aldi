<template>
  <header>
    <div class="ui fluid two item menu">
      <RouterLink class="item active" to="/products">
        <i class="dolly icon"></i>
        Products
      </RouterLink>
      <RouterLink class="item" to="/cart">
        <i class="shopping basket icon"></i>
        Cart
        <span v-if="cartStore.cart.length" class="cart-quantity">{{ cartStore.cart.length }}</span>
      </RouterLink>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
import { useCartStore } from './store/cart';

const isActiveTab = ref(true);

const cartStore = useCartStore();

onMounted(() => {
  isActiveTab.value = !isActiveTab.value
})
</script>

<style scoped>
.cart-quantity {
  width: 24px;
  height: 24px;
  border: 1px solid red;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  margin-left: 4px;
}
</style>
