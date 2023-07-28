<template>
  <UniqueHeader title="404 not found" :pagesList="['home', 'pages', '404 not found']"/>
</template>

<script>
import UniqueHeader from '@/components/UniqueHeader.vue'

export default {
  name: 'Not Found',
  components: {
    UniqueHeader
  }
}

</script>

<style lang="scss" scoped>
</style>