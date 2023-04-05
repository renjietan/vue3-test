<template>
    <!-- 当做组件直接使用 -->
    <r @click="getClickEvent" text="传入的文本">
        <!-- 插槽 -->
        <template #default>
            <div>插槽</div>
        </template>
    </r>
</template>
<script setup lang="ts">
    import { h } from "vue";
    type Props = {
        text: string
    }
    // 第一个参数代表 DON元素的类型，
    // 第二参数代表属性  
    // 第三个参数代表内容，一般为文字
    const r = (props: Props, ctx: any) => {
        return h("div", {
            class: ["divClass1", "divClass2"],
            style: {
                "font-size": "30px",
                "color": "red",
            },
            onClick: () => {
                ctx.emit("click", "点击事件")
            }
        }, 
            props.text,
            // 插槽
            ctx.slots.default(),
            
        )
    }
    const getClickEvent = (v) => {
        console.log(v)
    }
</script>
<style lang="scss" scoped>
    .divClass1 {
        width: 200px;
    }

    .divClass2 {
        height: 200px;
    }
</style>