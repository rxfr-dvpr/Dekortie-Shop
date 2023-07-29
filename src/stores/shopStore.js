import { defineStore } from "pinia";

export const shopStore = defineStore('Shop Store', {
    state: () => ({
        header: {
            title: 'shop',
            pagesList: ['home', 'pages', 'shop']
        }
    })
})