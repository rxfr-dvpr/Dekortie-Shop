import { defineStore } from "pinia";

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
        }
    }),
    getters: {
        getUniqueArr() {
            const arr = [...this.products]
            this.uniqueProducts = arr.filter((obj, idx, self) => idx === self.findIndex((t) => t.name === obj.name && t.price === obj.price))
            return this.uniqueProducts
        },
        getTotalPrice() {
            if (this.uniqueProducts.length) {
                let ttPrice = 0
                this.uniqueProducts.map(item => ttPrice += item.totalPrice)
                return ttPrice
            }
        }
    }
})