import { defineStore } from "pinia";

export const faqStore = defineStore('products Store', {
    state: () => ({
        header: {
            title: 'FAQ',
            pagesList: ['home', 'pages', 'faq']
        }
    })
})
