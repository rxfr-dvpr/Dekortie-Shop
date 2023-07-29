<template>
    <header class="header">
        <div class="container">
            <div class="row">

                <div class="header__descr">
                    <p class="header__descr-subtitle">{{ store.subtitle }}</p>
                    <h1 class="header__descr-title">{{ store.title }}</h1>
                    <p class="header__descr-txt">{{ store.text }}</p>
                    <button class="shop-btn pink-btn" @click="this.$router.push('/shop')">{{ store.btnTxt }}</button>
                </div>

                <img :src="lightImg" alt="" :class="`light-img ${pageShowen ? 'showen' : ''}`">

                <div class="header__img-box">
                    <img :src="armchairImg" alt="" :class="`header-img ${pageShowen ? 'showen' : ''}`">
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { headerStore } from "@/stores/HomeStores/headerStore.js";
import lightImg from "@/assets/images/homeView/header/light-img.png";
import armchairImg from "@/assets/images/homeView/header/armchair-img.png";
export default {
    name: 'Header',
    data() {
        return {
            store: headerStore(),
            lightImg,
            armchairImg,
            pageShowen: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.pageShowen = true        
        }, 500);
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    background: var(--header-bg);

    .row {
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: 40px 0;
        flex-wrap: unset;
    }

    &__descr {
        max-width: 645px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;

        &-subtitle {
            text-transform: capitalize;
            color: var(--main-pink);
            font-weight: 700;
        }

        &-title {
            color: var(--dark-color);
            text-transform: capitalize;
            font-size: 53px;
        }

        &-txt {
            font-size: 16px;
            color: var(--txt-purple);

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }

    .header__img-box {
        max-width: 500px;
        width: 100%;
        display: grid;
        place-items: center;

        .header-img {
            width: 100%;
            object-fit: contain;
            opacity: 0;
            transition: .6s !important;

            &.showen {
                opacity: 1;
            }
        }
    }

    .light-img {
        max-width: max-content;
        width: 100%;
        position: absolute;
        top: 0%;
        left: -25%;
        transform: translateY(-100%);
        transition: .6s !important;

        &.showen {
            transform: translateY(0);
        }
    }
}

</style>