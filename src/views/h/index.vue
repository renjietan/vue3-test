<template>
    <A></A>
</template>
<script lang="ts" setup>
    import { createVNode, render, h } from "vue";
    import A from "./components/a.vue";
    // 第一个参数代表 DON元素的类型，
    // 第二参数代表属性  
    // 第三个参数代表内容，一般为文字
    const r = createVNode("div", {
        style: {
            color: "red",
            "font-size": "30px"
        },
        class: ["classTest", "classTest"],
        id: "1231"
    }, "1231")

    render(r, document.body)
</script>