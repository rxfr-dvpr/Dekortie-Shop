<template>
  <UniqueHeader :title="store.header.title" :pagesList="store.header.pagesList"/>

  <main class="main">
    <AboutSection/>

    <Offer/>

    <Testimonials/>
  </main>
</template>

<script>
import UniqueHeader from '@/components/UniqueHeader.vue'
import { aboutStore } from "@/stores/aboutStore.js";
import Offer from '@/components/HomeComponents/Offer.vue';
import AboutSection from '@/components/AboutComponents/aboutSection.vue';
import Testimonials from '@/components/AboutComponents/testimonials.vue';

export default {
    name: 'About Page',
    components: {
        UniqueHeader,
        Offer,
        AboutSection,
        Testimonials
    },
    data() {
        return {
            store: aboutStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.main {
    width: 100%;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    row-gap: 140px;
}

</style>