import { defineStore } from "pinia";

export const offerStore = defineStore('Offer Store', {
    state: () => ({
        title: 'what shopex offer!',
        cards: [
            {
                name: 'swift & free delivery',
                txt: 'enjoy swift and free delivery for a seamless shopping experience.'
            },
            {
                name: 'cashback rewards',
                txt: 'get rewarded with cashback on your purchases.'
            },
            {
                name: 'product assurance',
                txt: 'ensuring product quality and reliability.'
            },
            {
                name: '24/7 support',
                txt: 'experience round-the-clock support for your website with our 24/7 customer assistance.'
            },
        ]
    })
})