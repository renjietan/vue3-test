<template>
    <slot name="test"></slot>
</template>
<script lang="ts" setup>
    
</script>
<style scoped lang="scss">
    :slotted(.a) {
        color: red
    }
    :slotted(.b) {
        color: gold
    }
</style>