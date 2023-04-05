<template>
    <div :class="[zs.div, zs.div2]">BBBBB</div>
</template>

<script lang="ts" setup>
    import { useCssModule, nextTick } from "vue";
    const css = useCssModule('zs')
    console.log("u=============", css);
</script>

<style  module="zs">
    .div {
        background: green;
        height: 100px;
    }
    .div2 {
        font-size: 35px;
    }
</style>