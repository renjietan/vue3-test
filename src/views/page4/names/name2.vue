<template>
    <div>
        name2------{{  count }}
    </div>
</template>
<script setup lang="ts">
    import { userStore } from "../../../store/index.ts";
    import { storeToRefs } from "pinia";
    const { count } = storeToRefs(userStore())
</script>