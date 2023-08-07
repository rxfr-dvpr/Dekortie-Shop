import { defineStore } from "pinia";

export const cartStore = defineStore('Cart Store', {
    state: () => ({
        header: {
            title: 'shopping cart',
            pagesList: ['home', 'pages', 'shopping cart']
        },
        products: [],
        cartTotals: {
            title: 'cart totals',
            taxFee: 105,
            calcTitle: 'calculate shipping'
        },
        shipping: {
            country: '',
            address: '',
            postCode: ''
        }
    }),
    getters: {
        getTotalPrice() {
            let ttPrice = 0
            this.products.map(item => ttPrice += item.totalPrice)
            return ttPrice
        }
    }
})