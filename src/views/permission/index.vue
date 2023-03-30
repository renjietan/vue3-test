<template>
    <div>
        {{ user.userInfo }}
        <el-button v-permission="{value: '111'}" @click="handleNav" type="primary">加到100 按钮隐藏</el-button>
        <el-button v-test:1111.TRJ="123123" type="primary">指令集修饰符以及参数</el-button>
    </div>
</template>
<script setup lang="ts">
    import { useRouter } from "vue-router";
    import { userStore } from "../../store/index";
    import { vPermission, vTest } from "../../directives/permission"
    const $router = useRouter()
    const user = userStore()
    const handleNav = () => {
        let num = Number(user.userInfo?.name ?? 0)
        user.userInfo.name = `${ num + 1 }`
        // $router.push({
        //     path: "/page2",
        //     query: {
        //         query: 1,
        //     },
        //     params: {
        //         params: 1
        //     }
        // })
    }
</script>