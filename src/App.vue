<template>
  <el-input v-model="state.text" placeholder="请输入需要传递的文字" />
  <provider></provider>
  <todo-list></todo-list>
  <Ref></Ref>
  <!-- <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" key="/home"/>
    </transition>
   </router-view> -->
</template>

<script  setup lang="ts">
  import { provide,watch, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount, reactive, onRenderTracked, onRenderTriggered, ref } from "vue";
  import { userStore } from "./store/index.ts";
  import { storeToRefs } from "pinia";
  import { route } from 'vue'
  import provider from "./views/provider/index.vue";
  import TodoList from "./views/TodoList/index.vue";
  import Ref from "./views/ref/index.vue";
  const state = reactive({
    text: ""
  })

  provide("msg_provide", state)
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
    console.log("onBeforeMount===================", )
  })
  onMounted(() => {
    console.log("获取到的DOM元素===================", div)
    console.log("onMounted===================", )
  })
  onBeforeUpdate(() => {
    console.log("onBeforeUpdate===================", )
  })
  onUpdated(() => {
    console.log("onUpdated===================", )
  })
  onBeforeUnmount(() => {
    console.log("onBeforeUnmount===================", )
  })
  onUnmounted(() => {
    console.log("onUnmounted===================", )
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