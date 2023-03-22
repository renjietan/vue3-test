<template>
    <div class="son">{{ msg.text }}son</div>
</template>
<script setup lang="ts">
    import { inject } from 'vue'
    const msg = inject("msg_provide")
    
</script>