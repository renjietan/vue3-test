<template>
    <div>
        <el-input v-model="test"></el-input>
        <A>
            <template #test>
                <div :class="[ test > 10 ? 'a' : 'b' ]">1123</div>
            </template>
        </A>
        <div class="dist">11111</div>
        <B></B>
    </div>
</template>
<script lang="ts" setup>
    import A from "./components/a.vue";
    import B from "./components/b.vue";
    import { ref } from "vue";
    const test = ref("")
    //NOTE(@date:2023-04-02 15:56:43 谭人杰): $字符串
    const font_style  = ref("red")
    //NOTE(@date:2023-04-02 15:56:49 谭人杰): JSON
    const bg_style = ref({
        background: "yellow"
    })
    setTimeout(() => {
        bg_style.value.background = "red"
        font_style.value = "white"
    }, 2000)


</script>

<style lang="scss" scoped>
    .dist {
        width: 100px;
        height: 100px;
        color: v-bind(font_style);
        background: v-bind('bg_style.background');
    }
    /* style标签必须加上scoped，否则不生效 */
    :deep(.el-input__inner) {
        color: red !important;
    }

    :global(div) {
        background: silver;
    }
</style>