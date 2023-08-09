<template>
  <UniqueHeader :title="store.header.title" :pagesList="store.header.pagesList"/>

  <section class="products__section">
    <div class="container">
        <div class="row">
            <div class="products__table-box" v-if="store.products.length">
                <table class="selected__products-table" >
                    <tr class="product__top-types">
                        <th>product</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                    </tr>

                    <tr class="product-item" v-for="(product, idx) in store.products" :key="idx">
                        <td class="product-info">
                            <img :src="product.img" alt="" class="product-info-img">
                            <p class="product-info-name">{{ product.name }}</p>

                            <button class="del-btn" @click="this.store.products.splice(idx, 1)"><i class="fal fa-times"></i></button>
                        </td>

                        <td class="product-price">${{ product.price }}.00</td>

                        <td class="product-quantity">
                            <span class="quantity-btn" @click="product.quantity > 1 ? priceChange(idx, '-'): ''">-</span>
                                {{ product.quantity }} 
                            <span class="quantity-btn" @click="priceChange(idx, '+')">+</span>
                        </td>

                        <td class="product-total-price">${{ product.totalPrice }}.00</td>
                    </tr>

                    <tr>
                        <button class="clear-btn pink-btn" @click="store.products = [], store.uniqueProducts = []">clear cart</button>
                    </tr>                
                </table>
            </div>

            <p class="no-product-txt" v-else>there is not any selected products</p>
            
            <div class="cart__totals-sidebar">
                <p class="cart__totals-title">{{ store.cartTotals.title }}</p>

                <div class="cart__totals-price-info">
                    <p class="cart__totals-subtotal">subtotals: <span>${{ store.getTotalPrice || 0 }}.00</span></p>
                    <p class="cart__totals-withTax">totals: <span>${{ store.getTotalPrice + store.cartTotals.taxFee || 0 }}.00</span></p>
                    <button class="checkout-btn pink-btn">proceed to checkout</button>
                </div>

                <p class="cart__totals-title">{{ store.cartTotals.calcTitle }}</p>

                <div class="cart__totals-shipping">
                    <input type="text" class="country-name" placeholder="country" v-model="store.shipping.country">
                    <input type="text" class="city-name" placeholder="city/address" v-model="store.shipping.address">
                    <input type="number" class="postal-code" placeholder="postal code" v-model="store.shipping.postCode">

                    <button class="calculate-btn pink-btn">calculate shipping</button>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import UniqueHeader from '@/components/UniqueHeader.vue'
import { cartStore } from "@/stores/cartStore.js";

export default {
    name: 'Cart View',
    components: {
        UniqueHeader
    },
    data() {
        return {
            store: cartStore()
        }
    },
    methods: {
        priceChange(idx, param) {
            if (param == '-') {
                this.store.products[idx].quantity--            
            } else if (param == '+') {
                this.store.products[idx].quantity++
            }

            this.store.products[idx].totalPrice = this.store.products[idx].price * this.store.products[idx].quantity
        }
    }
}

</script>

<style lang="scss" scoped>

.products__section {
    width: 100%;
    padding: 130px 0;

    .row {
        justify-content: space-between;
        gap: 50px;
    }

    .products__table-box {
        max-width: 720px;
        width: 100%;
        height: 100%;
    }

    .selected__products-table {
        width: 100%;
        height: 100%;

        .product__top-types {
            th {
                font-size: 20px;
                color: var(--off-ny-blue);
                padding-bottom: 45px;
                text-transform: capitalize;
            }
        }

        .product-item {
            width: 100%;
            text-align: left;
            text-align: center;
            position: relative;

            .product {
                &-info {
                    max-width: max-content;
                    width: 100%;
                    display: flex;
                    gap: 15px;
                    align-items: center;
                    padding-right: 10px;

                    &-img {
                        max-width: 80px;
                        width: 100%;
                        border-radius: 5px;
                        overflow: hidden;
                    }

                    &-name {
                        font-size: 15px;
                        font-weight: 500;
                        color: var(--dark-color);
                        text-transform: capitalize;
                    }

                    .del-btn {
                        background: transparent;
                        border: 0;
                        font-size: 20px;
                        position: absolute;
                        top: 0%;
                        right: -1%;
                        opacity: .1;

                        &:hover {
                            opacity: 1;
                            i {
                                color: var(--main-pink);
                            }
                        }
                    }
                }

                &-price, &-total-price {
                    font-size: 15px;
                    font-weight: 500;
                    color: var(--off-ny-blue);
                }

                &-quantity {
                    .quantity-btn {
                        cursor: pointer;
                        background: #E7E7EF;
                        padding: 3px 6px;
                    }
                }
            }
        }

        .clear-btn {
            margin-top: 30px;
        }
    }

    .no-product-txt {
        font-size: 20px;
        font-weight: 700;
        color: var(--off-ny-blue);
        text-transform: capitalize;
    }

    .cart__totals-sidebar {
        max-width: 370px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 45px;

        .cart__totals {
            &-title {
                font-size: 20px;
                font-weight: 700;
                color: var(--off-ny-blue);
                text-transform: capitalize;
            }

            &-price-info, &-shipping {
                width: 100%;
                background: var(--header-bg);
                padding: 30px 25px;
                border-radius: 3px;
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 35px;

                .checkout-btn {
                    max-width: 100%;
                    background: var(--main-green);
                }
            }

            &-subtotal, &-withTax {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-align: start;
                text-transform: capitalize;
                font-size: 18px;
                font-weight: 600;
                color: var(--off-ny-blue);
                padding-bottom: 13px;
                border-bottom: 2px solid #E8E6F1;

                span {
                    color: var(--off-ny-blue);
                }
            }

            &-shipping {
                input {
                    width: 100%;
                    outline: none;
                    border: 0;
                    font-size: 15px;
                    color: var(--txt-purple);
                    background: transparent;
                    border-bottom: 1px solid #C7CEE4;
                    padding-bottom: 4px;

                    &::placeholder {
                        font-size: 15px;
                        color: var(--txt-purple);
                        text-transform: capitalize;
                    }
                }
            }
        }
    }
}

@media (max-width: 1170px) {
    .products__table-box  {
        max-width: 650px !important;
    }

    .cart__totals-sidebar {
        max-width: 320px !important;
    }
}

@media (max-width: 1060px) {
    .products__table-box  {
        max-width: 600px !important;
    }

    .cart__totals-sidebar {
        max-width: 300px !important;
    }
}

@media (max-width: 992px) {
    .products__section {
        padding: 70px 0;
    }

    .products__table-box  {
        max-width: 500px !important;
    }

    .cart__totals-sidebar {
        max-width: 260px !important;
    }

    .no-product-txt {
        text-align: center;
    }
}

@media (max-width: 850px) {
    .products__table-box  {
        overflow-x: auto;
        padding-bottom: 10px;

        .selected__products-table {
            min-width: 550px !important;
        }
    }

    .row {
        flex-direction: column;
        align-items: center;
    }
}

::-webkit-scrollbar {
    height: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
}


</style>