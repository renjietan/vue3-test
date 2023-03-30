<template>
    <div style="height: 300px; flex: 1;background: yellowgreen; color: white;">
        <div v-for="item in arr">
            {{ item }}
        </div>
    </div>
</template>
<script lang="ts" setup>
    import Bus from "../$bus"
    const arr = ref([])
    Bus.$on("query", (v: any) => {
        debugger
    })
</script>