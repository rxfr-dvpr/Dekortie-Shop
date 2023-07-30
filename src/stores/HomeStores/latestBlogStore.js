import { defineStore } from "pinia";

export const ltstBlogStore = defineStore('Latest Blog Store', {
    state: () => ({
        title: 'latest blog',
        cards: [
            {
                author: 'saberali',
                date: '23 august, 2021',
                title: 'top esssential trends in 2021',
                txt: 'more off this less hello samlande lied much over tightly circa horse taped mightly'
            },
            {
                author: 'liam turner',
                date: '14 september, 2022',
                title: 'key indispensable trends in 2022',
                txt: 'fewer greetings from the united land of sam, much dancing around tightly bound horses.'
            },
            {
                author: 'noah anderson',
                date: '5 april, 2023',
                title: 'the most crucial trends in 2023',
                txt: 'increased quantity of this, many songs and festivities surrounding securely fastened equines.'
            }
        ]
    })
})