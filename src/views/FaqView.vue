<template>
    <UniqueHeader :title="store.header.title" :pagesList="store.header.pagesList"/>
    
    <GeneralInfo/>
</template>

<script>
import UniqueHeader from '@/components/UniqueHeader.vue'
import { faqStore } from "@/stores/FaqStore.js";
import GeneralInfo from '@/components/FAQComponents/GeneralInfo.vue';

export default {
    name: 'Faq Page',
    components: {
        UniqueHeader,
        GeneralInfo      
    },
    data() {
        return {
            store: faqStore()
        }
    }
}

</script>

<style lang="scss" scoped>
</style>