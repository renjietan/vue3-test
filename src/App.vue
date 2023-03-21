<template>
  <router-link to="/home">
  </router-link>
  <v></v>
  <div ref="div">{{ obj.count }}</div>
  <button @click="handleClick">点击</button>
  <button @click="handleProvide">传递</button>
  <!-- <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" key="/home"/>
    </transition>
   </router-view> -->
</template>

<script  setup lang="ts">
  import Home from "./views/home.vue"
  import { provide, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount, reactive, onRenderTracked, onRenderTriggered, ref } from "vue";
  import { userStore } from "./store/index.ts";
  import { storeToRefs } from "pinia";
  import { route } from 'vue'
  const v = Home
  const obj = reactive<{ count: String }>({
    count: 0,
    provide: ""
  })
  const text = ref("传递过来的数据")
  provide("provide", text)
  function handleClick() {
    obj.count++
  }
  function handleProvide() {
    obj.count++
    text.value = text.value + obj.count
  }
  //此处ref
  const div = ref < HTMLElement | null > (null)
  onRenderTriggered(e => {
    console.log("onRenderTracked===================", e)
  })
  onRenderTracked((e) => {
    console.log("onRenderTracked===================", e)
  })
  onRenderTracked((e) => {
    console.log("onRenderTracked===================", e)
  })
  onBeforeMount(() => {
    console.log("onBeforeMount===================", obj.count)
  })
  onMounted(() => {
    console.log("获取到的DOM元素===================", div)
    console.log("onMounted===================", obj.count)
  })
  onBeforeUpdate(() => {
    console.log("onBeforeUpdate===================", obj.count)
  })
  onUpdated(() => {
    console.log("onUpdated===================", obj.count)
  })
  onBeforeUnmount(() => {
    console.log("onBeforeUnmount===================", obj.count)
  })
  onUnmounted(() => {
    console.log("onUnmounted===================", obj.count)
  })
</script>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>