<template>
  <section class="subscription__section">
    <div class="container">
        <div class="row">
            <h2 class="subscr__title all-title">{{ store.title }}</h2>
            <button class="subscr-btn pink-btn" @click="this.$router.push('/shop')">{{ store.btnValue }}</button>
        </div>
    </div>

    <img src="@/assets/images/homeView/subscription/bg-img.png" alt="" class="bg-img">
  </section>
</template>

<script>
import { subscrStore } from "@/stores/HomeStores/subscriptionStore.js";

export default {
    name: 'Subscription',
    data() {
        return {
            store: subscrStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.subscription__section {
    width: 100%;
    padding: 150px 0 100px;
    position: relative;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 30px;
    }

    .subscr__title {
        max-width: 575px;
        width: 100%;
    }

    .bg-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        object-position: center;
        object-fit: cover;
    }
}

</style>