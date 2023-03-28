<template>
  <div class="container">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
      text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item :index="item.path" v-for="(item, index) in routes">
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </el-menu-item>
      <!-- <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3">Info</el-menu-item>
      <el-menu-item index="4">Orders</el-menu-item> -->
    </el-menu>
    <router-view style="flex:1"></router-view>
  </div>
</template>


<script setup lang="ts">
  import { watch, provide, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount, reactive, onRenderTracked, onRenderTriggered, ref, watchEffect, toRaw} from "vue";
  import { userStore } from "./store/index.ts";
  import { storeToRefs } from "pinia";
  import { useRouter } from "vue-router";
  import { route } from 'vue'
  import { routes } from "./router";
  import provider from "./views/provider/index.vue";
  import TodoList from "./views/TodoList/index.vue";
  import vModel from "./views/vModel/index.vue";
  import Ref from "./views/ref/index.vue";
  import card from "./views/card/index.vue";
  const $router = useRouter()
  const activeIndex = ref(null)
  watch($router.currentRoute, (n, o) => {
    activeIndex.value = n.matched[0].path
  })
  onRenderTriggered(e => {
    console.log("onRenderTracked===================", e)
  })
  onRenderTracked((e) => {
    console.log("onRenderTracked===================", e)
  })
  onBeforeMount(() => {
    console.log("onBeforeMount===================",)
  })
  onMounted(() => {
    console.log("获取到的DOM元素===================",)
    console.log("onMounted===================",)
  })
  onBeforeUpdate(() => {
    console.log("onBeforeUpdate===================",)
  })
  onUpdated(() => {
    console.log("onUpdated===================",)
  })
  onBeforeUnmount(() => {
    console.log("onBeforeUnmount===================",)
  })
  onUnmounted(() => {
    console.log("onUnmounted===================",)
  })
</script>

<style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>