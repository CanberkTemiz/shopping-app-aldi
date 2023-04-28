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
                <input type="text" v-model="quantity" :min="product.minOrderAmount" :max="product.availableAmount"
                    @input="validateInput(quantity, props.product.availableAmount)" />
                <p v-if="error">{{ error }}</p>
            </div>
        </div>

        <div class="extra content">
            <button @click="handleAddToCart" class="ui button" :class="{ 'disabled': error }">
                Add to Cart
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../store/cart';
import { useInputValidation } from '../composable/useInputValidation'

const { error, validateInput } = useInputValidation()
const cartStore = useCartStore();
const props = defineProps({
    product: Object
})

const quantity = ref(props.product.minOrderAmount);

const handleAddToCart = () => {
    cartStore.addToCart(props.product, +quantity.value)
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