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
      </RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';

const isActiveTab = ref(true);

onMounted(() => {
  isActiveTab.value = !isActiveTab.value
})
</script>
