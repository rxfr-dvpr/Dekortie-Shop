<template>
  <UniqueHeader :title="store.header.title" :pagesList="store.header.pagesList"/>
</template>

<script>
import UniqueHeader from '@/components/UniqueHeader.vue'
import { blogStore } from "@/stores/blogStore.js";

export default {
    name: 'Blog Page',
    components: {
        UniqueHeader      
    },
    data() {
        return {
            store: blogStore()
        }
    }
}

</script>

<style lang="scss" scoped>

</style>