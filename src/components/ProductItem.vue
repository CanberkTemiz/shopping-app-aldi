<template>
    <Card class="card" style="width: 25em">
        <template #header>
            <img :src="product.img" :alt="product.name" />
        </template>
        <template #title>{{ product.name }}</template>
        <template #subtitle> Card subtitle </template>
        <template #content>
            <p>Price: ${{ product.price }}</p>
            <p>Available: {{ isAvailable ? product.availableAmount : 'Not Available' }}</p>
            <p>*Min order amount: {{ product.minOrderAmount }}</p>
            <label for="username">Quantity: </label>
            <InputText type="text" :disabled="!isAvailable" v-model="quantity" :min="product.minOrderAmount"
                :max="product.availableAmount" aria-describedby="username-help"
                @input="validateInput(quantity, props.product.availableAmount, product.minOrderAmount)" />
        </template>
        <template #footer>
            <Button icon="pi pi-check" label="Save" />
            <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
        </template>
    </Card>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCartStore } from '../store/cart';
import { useInputValidation } from '../composable/useInputValidation'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

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

</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    height: 150px !important;
}
</style>