<template>
    <div>
        child2-----{{ count }}
    </div>
</template>

<script setup>
    import { userStore } from "../../../store/index.ts";
    import { storeToRefs  } from "pinia";
    const { count } = storeToRefs(userStore())
</script>