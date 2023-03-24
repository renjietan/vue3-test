<template>
    <div class="list" v-for="item in props.arr" :key="item">
        <el-checkbox v-model="item.isChecked" :label="item.label" size="large" />
    </div>
</template>
<script setup lang="ts">
    import { defineProps,watchEffect } from 'vue'
    const props = defineProps({
        arr: {
            type: Array,
            default: []
        }
    })
</script>

<style lang="scss" scoped>
    .list {
        border: 1px solid rgba(0, 0, 0, 0.1);
        line-height: 36px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: start;
        padding-left: 10px;
        &:last-child {
            margin-bottom: 20px;
        }
    }
</style>