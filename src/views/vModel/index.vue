<template>
    <div class="box" :style="{'background': props.modelValue ? 'red' : 'white'}">
        <el-input v-model="props.text" @input="handleChange"></el-input>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        text: {
            type: String,
            default: ""
        }
    })
    const $emit = defineEmits(["update:text"])
    const handleChange = (e) => {
        $emit("update:text", e)
    }
</script>

<style lang="scss">
    .box {
        margin-top: 30px;
        background: red;
        width: 800px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>