<template>
  <UniqueHeader :title="store.header.title" :pagesList="store.header.pagesList"/>
</template>

<script>
import UniqueHeader from '@/components/UniqueHeader.vue'
import { shopStore } from "@/stores/shopStore.js";

export default {
    name: 'Shop Page',
    components: {
        UniqueHeader
    },
    data() {
        return {
            store: shopStore()
        }
    }
}

</script>

<style lang="scss" scoped>

</style>