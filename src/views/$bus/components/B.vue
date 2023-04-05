<template>
    <div style="height: 300px; flex: 1;background: yellowgreen; color: white;">
        <div v-for="item in arr">
            {{ item }}
        </div>
    </div>
</template>
<script lang="ts" setup>
    import Bus from "../$bus"
    import { getCurrentInstance } from "vue"
    const arr = ref([])
    const _this = getCurrentInstance()
    const $bus = _this?.proxy?.$bus
    $bus.$on("query", (v: any) => {
        arr.value.push(v)
    })
</script>