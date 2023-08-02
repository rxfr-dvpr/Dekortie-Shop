<template>

  <section class="ltst__products__section">
    <div class="container">
        <div class="row">
            <h2 class="ltst__products-title all-title">{{ store.title }}</h2>

            <div class="product-types">
                <span class="type-name" v-for="(name, idx) in store.productList" :key="idx" 
                :class="{'active': name.visible}" @click="visibleFunc(idx)">{{ name.typeName }}</span>
            </div>

            <div class="product__cards" v-for="(card, idd) in store.productList" :key="idd" v-show="card.visible">
                <div class="product__cards-item" v-for="(item, id) in card.products" :key="id">
                    <img :src="images[id]" alt="" class="product-img">

                    <div class="product__info">
                        <p class="product__info-name">{{ item.name ? item.name : 'no name' }}</p>
                        <p class="product__info-newPrice">${{ item.newPrice ? item.newPrice : '00'  }}.00</p>
                        <p class="product__info-oldPrice">${{ item.oldPrice ? item.oldPrice : '00' }}.00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>

</template>

<script>
import { ltstProductsStore } from "@/stores/HomeStores/ltstProductsStore.js";
import image1 from "@/assets/images/homeView/ltstProducts/ltst-product-img-1.png";
import image2 from "@/assets/images/homeView/ltstProducts/ltst-product-img-2.png";
import image3 from "@/assets/images/homeView/ltstProducts/ltst-product-img-3.png";
import image4 from "@/assets/images/homeView/ltstProducts/ltst-product-img-4.png";
import image5 from "@/assets/images/homeView/ltstProducts/ltst-product-img-5.png";
import image6 from "@/assets/images/homeView/ltstProducts/ltst-product-img-6.png";

export default {
    name: 'Latest Products',
    data() {
        return {
            store: ltstProductsStore(),
            images: [image1, image2, image3, image4, image5, image6]
        }
    },
    methods: {
        visibleFunc(id) {
            this.store.productList.map(item => item.visible = false)
            this.store.productList[id].visible = true
        }
    }
}

</script>

<style lang="scss" scoped>

.ltst__products__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 20px;
    }

    .product-types {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;

        .type-name {
            text-transform: capitalize;
            color: var(--dark-blue);
            cursor: pointer;
            transition: .4s;

            &:hover {
                color: var(--main-pink);
            }

            &.active {
                color: var(--main-pink);
                border-bottom: 1px solid var(--main-pink);
            }
        }
    }

    .product__cards {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        column-gap: 35px;
        row-gap: 100px;
        margin-top: 20px;

        &-item {
            max-width: 360px;
            width: 100%;
            background: #F7F7F7;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 30px;
            justify-content: space-between;

            .product-img {
                max-width: max-content;
                width: 100%;
                object-fit: contain;
                max-height: 260px;
                height: 100%;
            }

            .product__info {
                width: 100%;
                background: var(--main-white);
                margin-top: 15px;
                display: flex;
                align-items: center;
                padding: 15px 10px 0;
                gap: 8px;

                &-name {
                    margin-right: auto;
                    text-transform: capitalize;
                    font-size: 16px;
                    font-weight: 500;
                    color: var(--dark-blue);
                    border-bottom: 2px solid #EEEFFB;
                    padding-bottom: 2px;
                }

                &-newPrice {
                    font-size: 14px;
                    color: var(--dark-blue);
                    font-weight: 600;
                }

                &-oldPrice {
                    font-size: 14px;
                    color: var(--main-red);
                    font-weight: 600;
                    text-decoration: line-through;
                }
            }
        }
    }
}

</style>