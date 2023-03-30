<template>
    <div style="height: 300px; flex: 1; background: red;color: white;">
        <el-button @click="handleClick">派发</el-button>
    </div>
</template>

<script lang="ts" setup>
import Bus from "../$bus"
const handleClick = () => {
    Bus.$emit("query", `我是A组件出来过来的值${Math.random()}`)
}
</script>