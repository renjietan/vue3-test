<template>
    <input-text @addItem="addItem"></input-text>
    <List :arr="arr"></List>
    <action-btns @action="handleAction"></action-btns>
</template>
<script setup lang="ts">
    import { ref, reactive, onRenderTriggered } from 'vue'
    import inputText from "./components/Header.vue";
    import actionBtns from "./components/Footer.vue";
    import List from "./components/List.vue";
    const arr = ref([])
    const addItem = (v) => {
        arr.value.push(v)
    }
    const handleAction = (v) => {
        if(v.indexOf("全选") >= 0 || v.indexOf("全不选") >= 0) {
            arr.value = arr.value.map(item => {
                item.isChecked = v.indexOf("全选") >=0
                return item
            })
            return
        } else {
            let len = arr.value.length - 1
            let random = Math.floor(Math.random() * len)
            arr.value = arr.value.map((item, index) => {
                item.isChecked = index == random
                return item
            })
        }
    }
</script>