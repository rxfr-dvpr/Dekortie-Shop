import { defineStore } from "pinia";

export const subscrStore = defineStore('Subscription Store', {
    state: () => ({
        title: 'get leatest update by subscribe 0ur newslater',
        btnValue: 'shop now'
    })
})