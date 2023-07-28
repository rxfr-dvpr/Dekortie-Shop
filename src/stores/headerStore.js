import { defineStore } from "pinia";

export const headerStore = defineStore('Header Store', {
    state: () => ({
        subtitle: 'best furniture for your castle....',
        title: 'new furniture collection trends in 2020',
        text: 'new furniture collection 2020: innovative design meets contemporary style for ultimate comfort and sophistication.',
        btnTxt: 'shop now'
    })
})