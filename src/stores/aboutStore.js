import { defineStore } from "pinia";

export const aboutStore = defineStore('About Store', {
    state: () => ({
        header: {
            title: 'about us',
            pagesList: ['home', 'pages', 'about us']
        }
    })
})
