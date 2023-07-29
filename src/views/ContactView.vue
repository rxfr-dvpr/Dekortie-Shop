<template>
  <UniqueHeader :title="store.header.title" :pagesList="store.header.pagesList"/>
</template>

<script>
import UniqueHeader from '@/components/UniqueHeader.vue'
import { contactStore } from "@/stores/contactStore.js";

export default {
    name: 'Contact Page',
    components: {
        UniqueHeader      
    },
    data() {
        return {
            store: contactStore()
        }
    }
}

</script>

<style lang="scss" scoped>

</style>