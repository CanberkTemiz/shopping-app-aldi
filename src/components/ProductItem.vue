<template>
    <div class="card">
        <div class="image" style="background: white">
            <img :src="product.img" :alt="product.name" />
        </div>
        <div class="content">
            <div class="header">{{ product.name }}</div>
            <h2 class="ui sub header">
                Price
            </h2>
            <span>${{ product.price }}</span>
            <div class="meta">
                <p>Available: {{ isAvailable ? product.availableAmount : 'Not Available' }}</p>
                <p>*Min order amount: {{ product.minOrderAmount }}</p>
            </div>
            <div class="description">
                <div class="quantity-label">
                    <p>Quantity</p>
                </div>
                <div class="quantity-section">
                    <button @click="validateInput(--quantity, props.product.availableAmount, product.minOrderAmount)">
                        <i class="minus icon"></i>
                    </button>
                    <div class="ui input" style="width: 50%;">
                        <input type="text" placeholder="Quantity..." :disabled="!isAvailable" v-model="quantity"
                            :min="product.minOrderAmount" :max="product.availableAmount" aria-describedby="username-help"
                            @input="validateInput(quantity, props.product.availableAmount, product.minOrderAmount)">
                    </div>
                    <button @click="validateInput(++quantity, props.product.availableAmount, product.minOrderAmount)"
                        class="ui icon button right floated">
                        <i class="plus icon"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="extra content footer">
            <div>
                <button @click="handleAddToCart" class="ui button" :class="{ 'disabled': error || !isAvailable }">
                    <i class="cart icon"></i>
                    Add Cart
                </button>
            </div>
            <div class="flex-1"></div>
            <div>
                <h3>
                    Total: ${{ calculateBulkProductPrice }}
                </h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
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

const calculateBulkProductPrice = computed(() => {
    if (error.value) return '-'
    return (Number(quantity.value) * Number(props.product.price)).toFixed(2)
})

</script>

<style scoped>
img {
    height: 250px !important;
    object-fit: contain;
}

.quantity-label {
    display: flex;
    justify-content: center;
    margin: 10px;
}

.quantity-section {
    display: flex;
    justify-content: space-evenly;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>