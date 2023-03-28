<template>
    <div>
        <router-link to="/page4/Name1AndName2">Name1AndName2</router-link>
        <router-link style="margin-left: 40px;" to="/page4/Name1AndName3">Name1AndName3</router-link>
        <router-view></router-view>
        <router-view name="name2"></router-view>
        <router-view name="name3"></router-view>
    </div>
</template>
<script lang="ts" setup>
    
</script>