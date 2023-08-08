import { defineStore } from "pinia";
export const navStore = defineStore('Nav Store', {
    state: () => ({
        logo: 'dekortie',
        links: [
            {
                name: 'home',
                url: '/'
            },
            {
                name: 'about',
                url: '/about'
            },
            {
                name: 'blog',
                url: '/blog'
            },
            {
                name: 'shop',
                url: '/shop'
            },
            {
                name: 'FAQ',
                url: '/faq'
            },
        ]
    })
})