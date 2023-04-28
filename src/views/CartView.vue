<template>
  <div class="cart">
    <CartList />
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText v-model="value1" placeholder="Search" />
    </span>
  </div>
</template>

<script setup>
import CartList from '../components/CartList.vue';
import InputText from 'primevue/inputtext'

</script>

<style scoped>
.cart {
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
}
</style>