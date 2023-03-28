<template>
    <div>
        <el-button @click="handleNav" type="primary">跳转</el-button>
    </div>
</template>
<script setup lang="ts">
    import { useRouter } from "vue-router";
    const $router = useRouter()
    const handleNav = () => {
        $router.push({
            path: "/page2",
            query: {
                query: 1,
            },
            params: {
                params: 1
            }
        })
    }
</script>