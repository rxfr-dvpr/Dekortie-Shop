<template>
  <section class="features__section">
    <div class="container">
        <div class="row">
            <img :src="featuresImg" alt="" class="features-img">

            <div class="features__content">
                <h2 class="features__content-title">{{ store.title }}</h2>

                <div class="features__content-list">
                    <p class="features__content-list-item" v-for="(item, idx) in store.featuresList" :key="idx">{{ item.txt }}</p>
                </div>

                <div class="features__content-ctrl">
                    <button class="add-btn pink-btn" @click="this.$router.push('/shop')">add to cart</button>

                    <p class="item-name">
                        {{ store.name }}
                        <span class="item-price">${{ store.price }}.00</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import featuresImg from "@/assets/images/homeView/uniqueFeatures/features-img.png";
import { featuresStore } from "@/stores/HomeStores/featuresStore.js";

export default {
    name: 'Unique Features',
    data() {
        return {
            featuresImg,
            store: featuresStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.features__section {
    width: 100%;
    padding: 15px 0;
    background: var(--header-bg);

    .row {
        justify-content: space-between;
        align-items: center;
    }

    .features-img {
        max-width: 550px;
        width: 100%;
    }

    .features__content {
        max-width: 505px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 30px;

        &-title {
            font-size: calc(25px + 10 * (100vw / 1920));
            color: var(--ny-blue);
            text-transform: capitalize;
        }

        &-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 12px;

            &-item {
                color: var(--txt-purple);
                display: flex;
                gap: 8px;
                text-transform: capitalize;

                &:nth-child(1) {
                    &::before {
                        content: '';
                        min-width: 11px;
                        max-width: 11px;
                        width: 100%;
                        min-height: 11px;
                        max-height: 11px;
                        height: 100%;
                        display: block;
                        border-radius: 50%;
                        background: var(--main-pink);
                        margin-top: 1px;
                    }
                }

                &:nth-child(2) {
                    &::before {
                        content: '';
                        min-width: 11px;
                        max-width: 11px;
                        width: 100%;
                        min-height: 11px;
                        max-height: 11px;
                        height: 100%;
                        display: block;
                        border-radius: 50%;
                        background: var(--main-blue);
                        margin-top: 1px;
                    }
                }

                &:nth-child(3) {
                    &::before {
                        content: '';
                        min-width: 11px;
                        max-width: 11px;
                        width: 100%;
                        min-height: 11px;
                        max-height: 11px;
                        height: 100%;
                        display: block;
                        border-radius: 50%;
                        background: #2BF5CC;
                        margin-top: 1px;
                    }
                }
            }
        }

        &-ctrl {
            width: 100%;
            display: flex;
            gap: 20px;
            align-items: center;

            .item-name {
                font-size: 14px;
                font-weight: 600;
                text-transform: capitalize;
                display: flex;
                flex-direction: column;

                .item-price {
                    font-size: 15px;
                }
            }
        }
    }
}

@media (min-width: 1920px) {
    .features__content {
        &-title {
            font-size: 35px !important;
        }
    }
}

@media (max-width: 1100px) {
    .features-img {
        max-width: 500px !important;
    }

    .features__content {
        max-width: 450px !important;
    }
}

@media (max-width: 992px) {

    .features__section {
        padding: 45px 0;

        .row {
            flex-direction: column;
        }

        .features-img {
            padding: 0 40px;
        }

        .features__content {
            align-items: center;
            text-align: center;

            &-title {
                font-size: calc(25px + (10 + 10 * 0.7) * ((100vw - 320px)/ 1920));
            }

            &-list {
                align-items: center;

                &-item {
                    justify-content: center !important;
                    max-width: max-content !important;
                    
                    &::before {
                        display: none !important;
                    }
                }
            }

            &-ctrl {
                justify-content: center;
            }
        }
    }
}

@media (max-width: 350px) {
    .features__content {
        &-ctrl {
            flex-direction: column;
        }
    }
}


</style>