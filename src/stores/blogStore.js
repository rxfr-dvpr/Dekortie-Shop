import { defineStore } from "pinia";

export const blogStore = defineStore('Blog Store', {
    state: () => ({
        header: {
            title: 'blog page',
            pagesList: ['home', 'pages', 'blog page']
        },
        blogs: [
            {
                title: "vintage furniture: timeless charm",
                shortText: "step into the world of vintage furniture, where classic styles and intricate craftsmanship shine. explore mid-century modern, victorian antiques, and rustic farmhouse treasures. experience the nostalgia and character vintage furniture brings.",
                author: "emily thompson",
                date: "october 5, 2022",
                img: 'https://shorturl.at/AKY25'
            },
            {
                title: "minimalist furniture: embracing simplicity",
                shortText: "discover the allure of minimalist furniture. clean lines, neutral colors, and functional simplicity create a serene ambiance. transform your space into a calming sanctuary.",
                author: "michael lee",
                date: "november 15, 2022",
                img: 'https://shorturl.at/oOQSZ'
            },
            {
                title: "sustainable furniture: designing for the future",
                shortText: "explore eco-friendly furniture design. reclaimed wood, recycled materials, and energy-efficient processes reduce our carbon footprint. experience the beauty and purpose of sustainable furniture.",
                author: "sophia rodriguez",
                date: "december 3, 2022",
                img: 'https://shorturl.at/krxyL'
            }
        ]
    })
})
