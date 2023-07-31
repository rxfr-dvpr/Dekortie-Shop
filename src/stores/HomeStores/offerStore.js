import { defineStore } from "pinia";

export const offerStore = defineStore('Offer Store', {
    state: () => ({
        title: 'what shopex offer!',
        cards: [
            {
                name: 'free delivery',
                txt: 'enjoy swift and free delivery for a seamless shopping experience.'
            },
            {
                name: '100% cash back',
                txt: 'get rewarded with cashback on your purchases.'
            },
            {
                name: 'quality product',
                txt: 'ensuring product quality and reliability.'
            },
            {
                name: '24/7 support',
                txt: 'experience round-the-clock support for your website with our 24/7 customer assistance.'
            },
        ]
    })
})