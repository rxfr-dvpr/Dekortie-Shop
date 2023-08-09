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
                    <img :src="item.img" alt="" class="product-img">

                    <div class="product__info">
                        <p class="product__info-name">{{ item.name ? item.name : 'no name' }}</p>
                        <p class="product__info-newPrice">${{ item.price ? item.price : '00'  }}.00</p>
                        <p class="product__info-oldPrice">${{ item.oldPrice ? item.oldPrice : '00' }}.00</p>
                    </div>

                    <div class="product__actions">
                        <button @click="pushData(idd, id)" class="product__actions-btn" data-v-14426c0f=""><i class="far fa-shopping-cart" data-v-14426c0f=""></i></button>
                        <button @click="this.$router.push('/wishlist')" class="product__actions-btn" data-v-14426c0f=""><i class="far fa-heart" data-v-14426c0f=""></i></button>
                        <button @click="this.$router.push('/shop')" class="product__actions-btn" data-v-14426c0f=""><i class="far fa-search-plus" data-v-14426c0f=""></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>

</template>

<script>
import { ltstProductsStore } from "@/stores/HomeStores/ltstProductsStore.js";
import { cartStore } from "@/stores/cartStore.js";

export default {
    name: 'Latest Products',
    data() {
        return {
            store: ltstProductsStore(),
            cartStore: cartStore()
        }
    },
    methods: {
        visibleFunc(id) {
            this.store.productList.map(item => item.visible = false)
            this.store.productList[id].visible = true
        },
        pushData(idd, id) {
            const data = {...this.store.productList[idd].products[id]};

            const existingProduct = this.cartStore.products.find(
              (item) => item.uniqueID === data.uniqueID
            );

            if (!existingProduct && idd == 0) {
              data.quantity = 1;
              data.totalPrice = data.price * data.quantity;
              this.cartStore.products.push(data);
            }
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
        justify-content: center;
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
            position: relative;
            cursor: pointer;
            overflow: hidden;

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

            .product__actions {
                max-width: max-content;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 15px;
                position: absolute;
                bottom: 15%;
                left: 3%;
                transform: translateX(-140%);

                &-btn {
                    border-radius: 50%;
                    min-width: 30px;
                    max-width: 30px;
                    height: 30px;
                    display: grid;
                    place-items: center;
                    transition: 0.4s;
                    font-size: 15px;
                    cursor: pointer;
                    padding-top: 2px;
                    border: 0;
                    background: transparent;
                    
                    i {
                        color: var(--light-blue);
                    }

                    &:hover {
                        background: var(--main-blue);

                        i {
                            color: var(--main-white);
                        }
                    }
                }
            }

            &:hover, &:active {
                .product__actions {
                    transform: translateX(0);
                }
            }

            &::before {
                content: 'sale';
                background: var(--main-blue);
                position: absolute;
                top: 6%;
                left: -2%;
                color: var(--main-white);
                padding: 5px 20px;
                border-top-left-radius: 25px;
                border-bottom-right-radius: 30px;
                transform: rotate(-35deg);
                text-transform: capitalize;
            }
        }
    }
}

@media (max-width: 786px) {
    .product__cards {
        row-gap: 60px !important;
        
        &-item {
            max-width: 300px !important;

            .product-img {
                padding: 0 50px;
            }
        }
    }
}

@media (max-width: 526px) {
    .product-types {
        gap: 30px !important;
        flex-wrap: wrap;
    }
}

@media (max-width: 346px) {
    .product__info {
        flex-direction: column;
        align-items: flex-start !important;
    }

    .product__actions {
        bottom: 25% !important;
    }
}

</style>