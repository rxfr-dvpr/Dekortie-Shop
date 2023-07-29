import { defineStore } from "pinia";

export const accountStore = defineStore('account Store', {
    state: () => ({
        header: {
            title: 'my account',
            pagesList: ['home', 'pages', 'my account']
        }
    })
})
