<template>
    <div>
        child1----{{ count }}
        <el-button type="primary" @click="click">+1</el-button>
        <!-- <child1></child1> -->
    </div>
</template>
<script setup lang="ts">
    import { userStore,  } from "../../../store/index.ts";
    import { storeToRefs } from "pinia";
    const s = userStore()
    const {count} = storeToRefs(s)
    const click = () => {
        count.value++
    }
    debugger
</script>