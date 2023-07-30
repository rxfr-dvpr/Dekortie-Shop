<template>
  <Header/>

  <main class="main">
    <FtdProducts/>

    <Offer/>

    <TopCategories/>

    <Subscription/>

    <LatestBlog/>
  </main>

</template>

<script>
import Header from '@/components/HomeComponents/Header.vue'
import FtdProducts from '@/components/HomeComponents/FtdProducts.vue'
import Subscription from '@/components/HomeComponents/Subscription.vue'
import Offer from '@/components/HomeComponents/Offer.vue'
import LatestBlog from '@/components/HomeComponents/LatestBlog.vue'
import TopCategories from '@/components/HomeComponents/TopCategories.vue'

export default {
  name: 'Home View',
  components: {
    Header,
    FtdProducts,
    TopCategories,
    Subscription,
    Offer,
    LatestBlog,
  }
}

</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 120px 0;
  row-gap: 80px;
}

</style>