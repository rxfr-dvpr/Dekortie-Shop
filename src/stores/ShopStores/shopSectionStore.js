import { defineStore } from "pinia";

export const shopSectionStore = defineStore('Shop Section Store', {
    state: () => ({
        topBar: {
            title: 'e-Commerce acceories & fashion item',
            subtitle: 'about 9,620 results (0.62 seconds)',
            sortFilterOptions: [ 
                { name: 'recommended', value: 'rec' }, 
                { name: 'highest price', value: 'hp' }, 
                { name: 'lowest price', value: 'lp' } 
            ]
        }
    })
})