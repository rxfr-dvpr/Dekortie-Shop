import { defineStore } from "pinia";

export const subscrStore = defineStore('Subscription Store', {
    state: () => ({
        title: 'get latest update by subscribe our newslater',
        btnValue: 'shop now'
    })
})