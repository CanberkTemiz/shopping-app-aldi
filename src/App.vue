<template>
  <div class="card relative z-2">
    <Menubar :model="items" />
  </div>
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
import { useRouter, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
import { useCartStore } from './store/cart';
import Menubar from 'primevue/menubar'

const isActiveTab = ref(true);
const items = ref([
  { label: 'Products', to: '/products' },
  { label: 'Cart', to: '/cart' },
])

const router = useRouter();
const cartStore = useCartStore();

const onMenuClick = (e) => {
  // router.push()
  console.log('basildi', e)
}

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
