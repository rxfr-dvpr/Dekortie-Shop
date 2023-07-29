import { defineStore } from "pinia";

export const contactStore = defineStore('Contact Store', {
    state: () => ({
        header: {
            title: 'contact us',
            pagesList: ['home', 'pages', 'contact us']
        }
    })
})
