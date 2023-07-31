import { defineStore } from "pinia";

export const aboutSectionStore = defineStore('About Section Store', {
    state: () => ({
        title: 'know about our ecomerce business, history',
        txt: 'Our journey began several years ago when a team of passionate entrepreneurs came together with a shared vision of revolutionizing the way people shop. With the rapid growth of technology and the increasing popularity of online shopping, we saw an opportunity to create a seamless and convenient e-commerce experience for customers worldwide. '
    })
})

