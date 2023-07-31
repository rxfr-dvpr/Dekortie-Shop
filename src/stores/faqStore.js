import { defineStore } from "pinia";

export const faqStore = defineStore('Faq Store', {
    state: () => ({
        header: {
            title: 'FAQ',
            pagesList: ['home', 'pages', 'faq']
        }
    })
})
