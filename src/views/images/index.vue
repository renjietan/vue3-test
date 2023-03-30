<template>
    <div>
        <img v-lazy="item" v-for="item in arr" alt="">
    </div>
</template>
<script lang="ts" setup>
import { Directive } from "vue";
const imgList:Record<string, { default: string }> = import.meta.glob("../../assets/*.png",{
    // NOTE(2023-03-29 15:03:08 谭人杰): 默认为懒加载（false）,静态加载为true,
    eager: true,
})
let arr:Array<string> = Object.values(imgList).map(item => item.default)
let vLazy:Directive<HTMLImageElement, string> = (el, binding) => {
    el.style.width = "100vw"
    el.style.height = "60vh"
    // NOTE(2023-03-29 16:51:57 谭人杰): 初始化监听
    const observer:IntersectionObserver = new IntersectionObserver((dom:Array<IntersectionObserverEntry>) => {
        // NOTE(2023-03-29 16:58:28 谭人杰): 当DOM节点出现在视图范围内时
        if(dom[0].intersectionRatio > 0) {
            setTimeout(() => {
                el.src = binding.value
            }, 2000)
            observer.unobserve(el)
        }
        // NOTE(2023-03-29 16:51:29 谭人杰): 注销
    })
    // NOTE(2023-03-29 16:51:39 谭人杰): 启动监听DOM元素
    observer.observe(el)
}
</script>