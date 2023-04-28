<template>
    <div class="item">
        <img class="ui avatar image" :src="props.item.img">
        <div class="content">
            <h3 class="header">{{ `Product: ${props.item.name} ` }}</h3>
            <div class="description">{{ `${props.item.quantity} x times added` }}</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    item: []
})
</script>

<style scoped>
.item {
    width: 100%;
}
</style>