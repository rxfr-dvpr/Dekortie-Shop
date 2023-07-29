<template>
  <UniqueHeader :title="store.header.title" :pagesList="store.header.pagesList"/>
</template>

<script>
import UniqueHeader from '@/components/UniqueHeader.vue'
import { productsStore } from "@/stores/productsStore.js";

export default {
    name: 'Products Page',
    components: {
        UniqueHeader      
    },
    data() {
        return {
            store: productsStore()
        }
    }
}

</script>

<style lang="scss" scoped>

</style>