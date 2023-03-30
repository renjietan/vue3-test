<template>
    <div ref="div">
        {{ r }}
    </div>
</template>
<script setup lang="ts">
import Hooks from './index'
const div = ref()
const r = Hooks(div)
</script>