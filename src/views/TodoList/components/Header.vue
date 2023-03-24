<template>
    <div>
        <p>{{ title }}</p>
        <div style="display: flex;">
            <el-input v-model="item" @keyup.enter="onEnter" placeholder="请输入要添加的Item"></el-input>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { inject, ref, defineEmits} from 'vue'
    const item = ref("")
    const title = inject("todo_title")
    const $emit = defineEmits(["addItem"])
    const onEnter = () => {
        let obj = {
            id: new Date().getTime(),
            label: item.value,
            isChecked: Math.random() > 0.5
        }
        $emit("addItem", obj)
    }
</script>