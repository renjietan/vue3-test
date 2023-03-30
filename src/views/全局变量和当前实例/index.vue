<template>
    <div>
        {{ $filters.formatStr("123") }}
        <card :a="123" :b="31231"></card>
    </div>
</template>
<script setup lang="ts">
    import { getCurrentInstance } from "vue";
    import Card from "../card/index.vue";
    const app = getCurrentInstance()
</script>