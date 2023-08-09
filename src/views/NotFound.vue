<template>
  <UniqueHeader title="404 not found" :pagesList="['home', 'pages', '404 not found']"/>

  <section class="error__section">
    <div class="container">
      <div class="row">
        <img :src="mainImg" alt="error image" class="error-img">
        <p class="error-txt">oops! The page you requested was not found!</p>
        <router-link to="/" class="back-btn pink-btn">back to home</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import UniqueHeader from '@/components/UniqueHeader.vue'
import mainImg from "@/assets/images/notFound/main-img.svg";

export default {
  name: 'Not Found',
  components: {
    UniqueHeader,
  },
  data() {
    return {
      mainImg
    }
  }
}

</script>

<style lang="scss" scoped>

.error__section {
  width: 100%;
  padding: 10px 0 120px;
  
  .row {
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 20px;
  }

  .error-txt {
    font-size: 24px;
    text-transform: capitalize;
    font-weight: 700;
  }

  .error-img {
    max-width: 900px;
    width: 100%;
  }

  .back-btn {
    margin-top: 40px;
  }
}

</style>