import { defineStore } from "pinia";

export const testimonialsStore = defineStore('Testimonials Store', {
    state: () => ({
        title: 'our client say!',
        commentList: [
            {
                name: 'John Smith',
                job: 'Interior Designer',
                comment: "Your furniture collection is impressive! As an interior designer, I always look for unique and stylish pieces to elevate my clients' spaces. Your store offers exceptional quality and a range of styles. Keep up the fantastic work!"
            },
            {
                name: 'Sarah Johnson',
                job: 'Homeowner',
                comment: "I recently bought a dining set from your shop and couldn't be happier! The customer service was outstanding, and the staff helped me find the perfect set. The quality is top-notch, and it transformed my dining area. Thank you!"
            },
            {
                name: 'David Thompson',
                job: 'Architect',
                comment: "As an architect, I always seek furniture that complements my designs and meets high standards of functionality. Your shop exceeded my expectations! The attention to detail and innovative designs are remarkable. Highly recommended!"
            },
            {
                name: 'Jennifer Parker',
                job: 'Blogger',
                comment: "I stumbled upon your furniture shop while researching for my interior design blog, and I must say, I am blown away! The variety of styles and attention to detail in each piece is impressive. I will feature your shop on my blog!"
            },
            {
                name: 'Michael Adams',
                job: 'Furniture Enthusiast',
                comment: "As a furniture enthusiast, I have visited countless shops, but yours stands out. The quality, craftsmanship, and unique designs are unparalleled. Your mix of classic and contemporary pieces is fantastic. Bravo!"
            }
        ]
    })
})