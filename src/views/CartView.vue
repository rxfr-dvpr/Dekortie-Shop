<template>
  <UniqueHeader :title="store.header.title" :pagesList="store.header.pagesList"/>

  <section class="products__section">
    <div class="container">
        <div class="row">
            <table class="selected__products-table" v-if="store.products.length">
                <tr class="product__top-types">
                    <th>product</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                </tr>

                <tr class="product-item" v-for="(product, idx) in store.getUniqueArr" :key="idx">
                    <td class="product-info">
                        <img :src="product.img" alt="" class="product-info-img">
                        <p class="product-info-name">{{ product.name }}</p>
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

            <p class="no-product-txt" v-else>there is not any selected products</p>
            
            <div class="cart__totals-sidebar">
                <p class="cart__totals-title">{{ store.cartTotals.title }}</p>

                <div class="cart__totals-price-info">
                    <p class="cart__totals-subtotal">subtotals: <span>${{ store.getTotalPrice || 0 }}.00</span></p>
                    <p class="cart__totals-withTax">totals: <span>${{ store.getTotalPrice + store.cartTotals.taxFee || 0 }}.00</span></p>
                </div>

                <p class="cart__totals-title">{{ store.cartTotals.calcTitle }}</p>
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

    .selected__products-table {
        max-width: 720px;
        width: 100%;

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
            margin: 15px 0;
            text-align: center;

            .product {
                &-info {
                    max-width: max-content;
                    width: 100%;
                    display: flex;
                    gap: 15px;
                    align-items: center;

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
                }

                &-price, &-total-price {
                    font-size: 15px;
                    font-weight: 500;
                    color: var(--off-ny-blue);
                }

                &-quantity {
                    .quantity-btn {
                        cursor: pointer;
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

            &-price-info {
                width: 100%;
                background: var(--header-bg);
                padding: 30px 25px;
                border-radius: 3px;
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 35px;
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
        }

    }
}

</style>