<template>
    <div>
        <!-- <slot></slot> -->
        <slot name="header"></slot>
        <div v-for="(item, index) in state" :key="index">
            <slot :data="item" :index="index"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { reactive, ref, useAttrs } from 'vue'
    const state = ref([{
        name: "谭仁杰2020",
    },{
        name: "谭仁杰2021",
    },{
        name: "谭仁杰2022",
    },{
        name: "谭仁杰2023",
    }])
    // NOTE(2023-03-30 19:31:15 谭人杰): 获取父组件传过来的所有参数
    const u = useAttrs()
    debugger
</script>