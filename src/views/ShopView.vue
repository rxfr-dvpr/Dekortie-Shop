<template>
  <UniqueHeader :title="store.header.title" :pagesList="store.header.pagesList"/>

  <ShopSection/>
</template>

<script>
import UniqueHeader from '@/components/UniqueHeader.vue'
import { shopStore } from "@/stores/shopStore.js";
import ShopSection from '@/components/ShopComponents/shopSection.vue';

export default {
    name: 'Shop Page',
    components: {
        UniqueHeader,
        ShopSection
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