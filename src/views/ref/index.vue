<template>
    <div>
        <div>{{ age }}</div>
        <el-button type="primary" @click="handleClick">点击</el-button>
        <el-input v-model="name"></el-input>
    </div>
</template>
<script setup lang="ts">
    import {watch, ref,toRef, toRefs, reactive, isRef, shallowRef, triggerRef, nextTick, customRef, readonly, shallowReactive } from 'vue'
   
    const re = reactive({
        "name": "谭人杰",
        "age": 1,
        "sex": "男"
    })
    const man = toRefs(re)
    const { name, age, sex } = man
    const handleClick = () => {
      // NOTE(2023-03-22 16:35:01 谭人杰): 更新后，d和s中的数据均会更新，说明toRef引用了原始数据
      age.value++
      name.value = "张三"
      
      console.log(re["__v_raw"])
    }
</script>