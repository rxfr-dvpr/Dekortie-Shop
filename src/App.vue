<template>
  <HeadingBar/>
  <Nav/>

  <router-view/>

  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue'
import HeadingBar from './components/HeadingBar.vue'
import Nav from './components/Nav.vue'

export default {
  name: "App",
  components: {
    HeadingBar,
    Nav,
    Footer
  }
}

</script>

<style lang="scss" scoped>
</style>