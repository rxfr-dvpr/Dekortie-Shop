import { defineStore } from "pinia";

export const categoriesStore = defineStore('Categories Store', {
    state: () => ({
        title: 'top categories',
        roundCards: [
            {
                name: 'mini lcw chair',
                price: '59'
            },
            {
                name: 'petite eames chair',
                price: '199'
            },
            {
                name: 'compact lounge chair',
                price: '149'
            },
            {
                name: 'tiny grain chair',
                price: '79'
            },
        ]
    })
})