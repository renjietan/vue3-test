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
    import { reactive, ref } from 'vue'
    const state = ref([{
        name: "谭仁杰2020",
    },{
        name: "谭仁杰2021",
    },{
        name: "谭仁杰2022",
    },{
        name: "谭仁杰2023",
    }])
</script>