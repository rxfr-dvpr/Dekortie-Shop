import { defineStore } from "pinia";

export const blogStore = defineStore('Blog Store', {
    state: () => ({
        header: {
            title: 'blog page',
            pagesList: ['home', 'pages', 'blog page']
        }
    })
})
