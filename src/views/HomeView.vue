<template>
  <Header/>

  <main class="main">
    <FtdProducts/>
  </main>

  <Footer/>
</template>

<script>
import Header from '@/components/HomeComponents/Header.vue'
import FtdProducts from '@/components/HomeComponents/FtdProducts.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home View',
  components: {
    Header,
    FtdProducts,
    Footer
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
  row-gap: 70px;
}

</style>