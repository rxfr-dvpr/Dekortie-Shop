import { defineStore } from "pinia";

export const singleBlogStore = defineStore('Single Blog Store', {
    state: () => ({
        title: 'single blog',
        pagesList: ['home', 'pages', 'single blog'],
        blogData: {},
        commentForm: {
            name: '',
            email: '',
            msg: ''
        }
    })
})