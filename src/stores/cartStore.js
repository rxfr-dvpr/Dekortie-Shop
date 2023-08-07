import { defineStore } from "pinia";
import { reactive } from "vue";

export const cartStore = defineStore('Cart Store', {
    state: () => ({
        header: {
            title: 'shopping cart',
            pagesList: ['home', 'pages', 'shopping cart']
        },
        products: [],
        uniqueProducts: [],
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
        getUniqueArr: (state) => {
            if (reactive(state.products)) {
                const arr = [...state.products]
                state.uniqueProducts = arr.filter((obj, idx, self) => idx === self.findIndex((t) => t.name === obj.name && t.price === obj.price))
                return state.uniqueProducts
            }
        },
        getTotalPrice: (state) => {
            if (reactive(state.uniqueProducts.length)) {
                let ttPrice = 0
                state.uniqueProducts.map(item => ttPrice += item.totalPrice)
                return ttPrice
            }
        }
    }
})