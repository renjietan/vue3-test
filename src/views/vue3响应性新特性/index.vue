<template>
    <div>
        {{ r }}
        {{ u }}
        <el-button @click="handleClick" border type="primary">加1</el-button>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive } from "vue";
    import { $ref, $$, $computed, $ } from "vue/macros"
    // 注意，此处使用 const，会导致r++无法赋值
    let r = $ref < number > (1)

    const d = reactive({
        A: "",
        B: 0
    })
    // 解构
    let { A, B} = $(d) // A: "" B:0
    const handleClick = () => {
        //不用使用.value了 
        r++
    }
    // 将变量转回 ref 对象,才可以监听
    watch($$(r), (v) => {
        console.log(v)
    })
   
</script>