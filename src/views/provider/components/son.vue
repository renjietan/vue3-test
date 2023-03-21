<template>
    <div class="son">{{ msg }}</div>
</template>
<script lang="ts">
    import { inject, defineComponent } from 'vue'
    export default defineComponent({
        name: "son",
        setup(props) {

        }
    })
    const msg = inject("msg_provide")
</script>