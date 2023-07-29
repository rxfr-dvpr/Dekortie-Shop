<template>
  <UniqueHeader :title="store.header.title" :pagesList="store.header.pagesList"/>
</template>

<script>
import UniqueHeader from '@/components/UniqueHeader.vue'
import { aboutStore } from "@/stores/aboutStore.js";

export default {
    name: 'About Page',
    components: {
        UniqueHeader      
    },
    data() {
        return {
            store: aboutStore()
        }
    }
}

</script>

<style lang="scss" scoped>

</style>