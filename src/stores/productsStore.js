import { defineStore } from "pinia";

export const productsStore = defineStore('products Store', {
    state: () => ({
        header: {
            title: 'products',
            pagesList: ['home', 'pages', 'products']
        }
    })
})
