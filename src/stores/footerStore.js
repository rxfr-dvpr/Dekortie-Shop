import { defineStore } from "pinia";

export const footerStore = defineStore('Footer Store', {
    state: () => ({
        logo: 'dekortie',
        form: {
            emailValue: '',
            btnValue: 'sign up',
            locationTxt: '17 Princess Road, London, Greater London NW1 8JR, UK'
        },
        footerLinks: [
            {
                title: 'categories',
                list: [
                    {
                        name: 'laptops & computers',
                        url: '/shop'
                    },
                    {
                        name: 'cameras & photography',
                        url: '/shop'
                    },
                    {
                        name: 'smart phones & tablets',
                        url: '/shop'
                    },
                    {
                        name: 'video games & consoles',
                        url: '/shop'
                    },
                    {
                        name: 'waterproof headphones',
                        url: '/shop'
                    }
                ]
            },
            {
                title: 'customer care',
                list: [
                    {
                        name: 'my account',
                        url: '/account'
                    },
                    {
                        name: 'discount',
                        url: '/account'
                    },
                    {
                        name: 'returns',
                        url: '/account'
                    },
                    {
                        name: 'orders history',
                        url: '/account'
                    },
                    {
                        name: 'order tracking',
                        url: '/account'
                    }
                ]
            },
            {
                title: 'pages',
                list: [
                    {
                        name: 'blog',
                        url: '/blog'
                    },
                    {
                        name: 'browse the shop',
                        url: '/shop'
                    },
                    {
                        name: 'category',
                        url: '/shop'
                    },
                    {
                        name: 'pre-built pages',
                        url: '/'
                    },
                    {
                        name: 'visual composer elements',
                        url: '/products'
                    },
                ]
            },
        ]
    })
})