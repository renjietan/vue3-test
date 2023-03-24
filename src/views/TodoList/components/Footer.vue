<template>
    <el-checkbox-group style="margin-top: 40px;" v-model="state.checked_action" :min="1" :max="2">
        <el-checkbox v-for="action in state.actions" :key="action" :label="action">{{
            action
            }}</el-checkbox>
    </el-checkbox-group>
</template>
<script setup lang="ts">
    import { reactive, defineEmits, watch } from "vue";
    const state = reactive({
        actions: ["全选", "选择任意项", "全不选"],
        checked_action: []
    })
    const $emit = defineEmits(["action"])
    watch(() => state.checked_action, () => {
        $emit("action", state.checked_action)
    })
</script>