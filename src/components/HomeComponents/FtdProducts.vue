<template>
  <section class="ftd__products__section">
    <div class="container">
        <div class="row">
            <h2 class="ftd__products-title all-title">{{ store.title }}</h2>

            <div class="ftd__products-cards">
                <div class="ftd__products-cards-item" v-for="(card, idx) in store.cards" :key="idx">
                    <img :src="card.img" alt="" class="product-img">
                
                    <div class="product-descr">
                        <p class="product-descr-name">{{ card.name }}</p>
                        <p class="product-descr-code">code - {{ card.code }}</p>
                        <p class="product-descr-price">${{ card.price }}.00</p>
                    </div>
                    
                    <button class="view-btn" @click="this.$router.push('/shop')">view details</button>

                    <div class="product-options">
                        <span class="product-options-btn" @click="pushData(idx)"><i class="far fa-shopping-cart"></i></span>
                        <span class="product-options-btn"><i class="far fa-heart"></i></span>
                        <span class="product-options-btn"><i class="far fa-search-plus"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { ftdProductsStore } from "@/stores/HomeStores/ftdProductsStore.js";
import { cartStore } from "@/stores/cartStore.js";

export default {
    name: 'Features Products',
    data() {
        return {
            store: ftdProductsStore(),
            cartStore: cartStore()
        }
    },
    methods: {
        pushData(idx) {
            const data = {...this.store.cards[idx]};

            const existingProduct = this.cartStore.products.find(
              (item) => item.uniqueID === data.uniqueID
            );

            if (!existingProduct) {
              data.quantity = 1;
              data.totalPrice = data.price * data.quantity;
              this.cartStore.products.push(data);
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.ftd__products__section {
    width: 100%;
    height: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 50px;
    }
    
    .ftd__products {
        &-cards {
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
    
            &-item {
                max-width: 270px;
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                background: #F6F7FB;
                box-shadow: 0 0 15px rgba($color: #00000044, $alpha: .08);
                border-radius: 3px;
                overflow: hidden;
                cursor: pointer;
                position: relative;
    
                .product-img {
                    max-width: max-content;
                    width: 100%;
                    object-fit: contain;
                    padding: 40px 0 20px;
                    pointer-events: none;
                }
    
                .product-descr {
                    width: 100%;
                    padding: 15px 35px;
                    background: #fff;
                    row-gap: 8px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: .4s;
                    z-index: 3;
    
                    &-name {
                        font-size: 18px;
                        text-transform: capitalize;
                        color: var(--main-pink);
                        font-weight: 600;
                        transition: .4s;
                    }
    
                    &-code, &-price {
                        font-size: 14px;
                        text-transform: capitalize;
                        color: var(--ny-blue);
                        font-weight: 600;
                        transition: .4s;
                    }
                }
    
                .view-btn {
                    background: var(--main-green);
                    border: 0;
                    position: absolute;
                    top: 75%;
                    left: 50%;
                    transform: translate(-50%, 0);
                    border-radius: 2px;
                    padding: 8px 12px;
                    font-size: 12px;
                    color: var(--main-white);
                    text-transform: capitalize;
                    transition: .4s;
                    box-shadow: 0 0 15px rgba($color: #00000073, $alpha: .1);
                }
    
                .product-options {
                    position: absolute;
                    top: 1%;
                    left: 3%;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transform: translateX(-110%);
    
                    &-btn {
                        border-radius: 50%;
                        min-width: 30px;
                        max-width: 30px;
                        height: 30px;
                        display: grid;
                        place-items: center;
                        transition: .4s;
                        font-size: 15px;
    
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
                    .product-descr {
                        background: var(--main-blue);
    
                        &-name, &-code, &-price {
                            color: var(--main-white);
                        }
                    }
    
                    .view-btn {
                        top: 60%;
                    }
    
                    .product-options {
                        transform: translateX(0);
                    }
                }
            }
        }
    }
}

@media (max-width: 600px) {
    .ftd__products {
        &-cards {
            &-item {
                max-width: 250px !important;

                &:hover {
                    .view-btn {
                        top: 55% !important;
                    }
                }
            }
        }
    }

    .product-img {
        padding: 20px 35px !important;
    }
}

</style>