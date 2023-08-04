import { defineStore } from "pinia";

export const shopSectionStore = defineStore('Shop Section Store', {
    state: () => ({
        topBar: {
            title: 'ecommerce acceories & fashion item',
            subtitle: 'about 9,620 results (0.62 seconds)',
            sortFilterOptions: ['recommended', 'most wanted', 'highest price',  'lowest price']
        }
    })
})