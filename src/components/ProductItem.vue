<template>
    <div class="product-item">
        <h2>{{ product.name }}</h2>
        <img :src="product.img" :alt="product.name" />
        <p>Price: ${{ product.price }}</p>
        <p>Available: {{ product.availableAmount }}</p>
        <label for="quantity">Quantity:</label>
        <input type="number" v-model="quantity" :min="product.minOrderAmount" :max="product.availableAmount" />
        <button @click="handleAddToCart">Add to Cart</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();
const props = defineProps({
    product: Object
})

const quantity = ref(props.product.minOrderAmount);

const handleAddToCart = () => {
    cartStore.addToCart(props.product, quantity.value)
}

</script>

<style scoped>
.product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
}

img {
    width: 100px;
    height: 100px;
}
</style>