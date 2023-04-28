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
                <p>Available: {{ isAvailable ? product.availableAmount : 'Not Available' }}</p>
                <p>*Min order amount: {{ product.minOrderAmount }}</p>
                <label for="quantity">Quantity:</label>
                <input :disabled="!isAvailable" type="text" v-model="quantity" :min="product.minOrderAmount"
                    :max="product.availableAmount"
                    @input="validateInput(quantity, props.product.availableAmount, product.minOrderAmount)" />
                <p v-if="error">{{ error }}</p>
            </div>
        </div>

        <div class="extra content">
            <button @click="handleAddToCart" class="ui button" :class="{ 'disabled': error || !isAvailable }">
                Add to Cart
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useCartStore } from '../store/cart';
import { useInputValidation } from '../composable/useInputValidation'

const { error, validateInput } = useInputValidation()
const cartStore = useCartStore();
const props = defineProps({
    product: Object
})

const quantity = ref(props.product.minOrderAmount);


const handleAddToCart = () => {
    if (!error.value) {
        cartStore.addToCart(props.product, +quantity.value)
    }
    quantity.value = props.product.minOrderAmount;
}

const isAvailable = computed(() => {
    if (props.product.availableAmount > 0) {
        return true;
    }
    return false;
})

// watch(quantity, (newQuantity, oldQuantity) => {
//     console.log(Number(newQuantity), props.product.availableAmount)

//     if (Number(newQuantity) > props.product.availableAmount) {
//         quantity.value = props.product.availableAmount
//     }
// })

// onUpdated(() => {
//     console.log('onUpdated');
    // if (quantity.value > props.product.availableAmount) {
    //     quantity.value = props.product.availableAmount
    // }
// })


</script>

<style scoped>
.card {
    align-items: center;
}

img {
    height: 150px !important;
}
</style>