<template>
    <div class="card">
        <div class="content">
            <div class="header">{{ product.name }}</div>
        </div>
        <div class="image">
            <img :src="product.img" :alt="product.name" />
        </div>
        <div class="content">
            <div class="description">
                <p>Price: ${{ product.price }}</p>
                <p>Available: {{ product.availableAmount }}</p>
                <label for="quantity">Quantity:</label>
                <input type="number" v-model="quantity" :min="product.minOrderAmount" :max="product.availableAmount" />
            </div>
        </div>

        <div class="extra content">
            <button @click="handleAddToCart" class="ui button">
                Add to Cart
            </button>
        </div>
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
.card {
    align-items: center;
}

img {
    height: 150px !important;
}
</style>