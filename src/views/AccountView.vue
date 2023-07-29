<template>
  <UniqueHeader :title="store.header.title" :pagesList="store.header.pagesList"/>
</template>

<script>
import UniqueHeader from '@/components/UniqueHeader.vue'
import { accountStore } from "@/stores/accountStore.js";

export default {
    name: 'My Account',
    components: {
        UniqueHeader
    },
    data() {
        return {
            store: accountStore()
        }
    }
}

</script>

<style lang="scss" scoped>

</style>