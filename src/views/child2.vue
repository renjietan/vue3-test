<template>
    <div>
        {{ u }}
    </div>
</template>
<script setup lang="ts">
    import { inject, computed, ref,onMounted } from 'vue'
    const u = inject("provide")
</script>