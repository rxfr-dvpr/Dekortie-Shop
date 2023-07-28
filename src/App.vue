<template>
  <HeadingBar/>
  <Nav/>

  <router-view/>
</template>

<script>
import HeadingBar from './components/HeadingBar.vue'
import Nav from './components/Nav.vue'

export default {
  name: "App",
  components: {
    HeadingBar,
    Nav,
  }
}

</script>

<style lang="scss" scoped>

</style>