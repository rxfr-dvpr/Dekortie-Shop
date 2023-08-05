<template>
  <UniqueHeader :title="store.header.title" :pagesList="store.header.pagesList"/>

  <BlogSection/>
</template>

<script>
import UniqueHeader from '@/components/UniqueHeader.vue'
import { blogStore } from "@/stores/blogStore.js";
import BlogSection from '@/components/BlogComponents/BlogSection.vue';

export default {
    name: 'Blog Page',
    components: {
        UniqueHeader,
        BlogSection      
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