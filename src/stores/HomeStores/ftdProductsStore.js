import { defineStore } from "pinia";

export const ftdProductsStore = defineStore('Featured Products', {
    state: () => ({
        title: 'featured products',
        cards: [
            {
                name: 'elon series chair',
                code: 'Y523201',
                price: '42'
            },
            {
                name: 'aidan sling chair',
                code: 'Y525367',
                price: '59'
            },
            {
                name: 'baxton studio chair',
                code: 'Y517932',
                price: '35'
            },
            {
                name: 'swanky wood chair',
                code: 'Y564387',
                price: '75'
            }
        ]
    })
})